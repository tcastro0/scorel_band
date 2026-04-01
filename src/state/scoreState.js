/**
 * scoreState.js
 * Pure game logic for Scorel padel tracker.
 * All functions receive the current state object and return
 * a new (mutated) state — no UI or framework dependencies.
 */

const POINTS = [0, 15, 30, 40]

// ─────────────────────────────────────────────
// Initial state factory
// ─────────────────────────────────────────────

export function initialState(firstServer) {
  return {
    ptA:           '0',
    ptB:           '0',
    idxA:          0,
    idxB:          0,
    gamesA:        0,
    gamesB:        0,
    setsA:         0,
    setsB:         0,
    deuceState:    '',
    serving:       firstServer || 'B',
    servingPlayer: '1',
    serveCountA:   0,
    serveCountB:   0,
    statusMsg:     '',
    setHistory:    [],
    history:       []
  }
}

// ─────────────────────────────────────────────
// Display refresh
// ─────────────────────────────────────────────

export function refreshDisplay(state) {
  const ds = state.deuceState
  if (ds === 'deuce') {
    state.ptA       = '40'
    state.ptB       = '40'
    state.statusMsg = 'DEUCE'
  } else if (ds === 'advA') {
    state.ptA       = 'ADV'
    state.ptB       = '40'
    state.statusMsg = 'Adv A'
  } else if (ds === 'advB') {
    state.ptA       = '40'
    state.ptB       = 'ADV'
    state.statusMsg = 'Adv B'
  } else {
    state.ptA       = String(POINTS[state.idxA])
    state.ptB       = String(POINTS[state.idxB])
    state.statusMsg = ''
  }
  return state
}

// ─────────────────────────────────────────────
// Snapshot (undo)
// ─────────────────────────────────────────────

export function saveSnapshot(state) {
  state.history.push({
    idxA:          state.idxA,
    idxB:          state.idxB,
    gamesA:        state.gamesA,
    gamesB:        state.gamesB,
    setsA:         state.setsA,
    setsB:         state.setsB,
    deuceState:    state.deuceState,
    serving:       state.serving,
    servingPlayer: state.servingPlayer,
    serveCountA:   state.serveCountA,
    serveCountB:   state.serveCountB,
    setHistory:    JSON.parse(JSON.stringify(state.setHistory))
  })
  if (state.history.length > 10) {
    state.history.shift()
  }
  return state
}

export function undoPoint(state) {
  if (state.history.length === 0) return refreshDisplay(state)
  const prev = state.history.pop()
  state.idxA          = prev.idxA
  state.idxB          = prev.idxB
  state.gamesA        = prev.gamesA
  state.gamesB        = prev.gamesB
  state.setsA         = prev.setsA
  state.setsB         = prev.setsB
  state.deuceState    = prev.deuceState
  state.serving       = prev.serving
  state.servingPlayer = prev.servingPlayer
  state.serveCountA   = prev.serveCountA
  state.serveCountB   = prev.serveCountB
  state.setHistory    = prev.setHistory
  return refreshDisplay(state)
}

// ─────────────────────────────────────────────
// Serve rotation
// ─────────────────────────────────────────────

function rotateServe(state) {
  state.serving = state.serving === 'A' ? 'B' : 'A'
  if (state.serving === 'A') {
    state.serveCountA   = state.serveCountA + 1
    state.servingPlayer = (state.serveCountA % 2 === 1) ? '1' : '2'
  } else {
    state.serveCountB   = state.serveCountB + 1
    state.servingPlayer = (state.serveCountB % 2 === 1) ? '1' : '2'
  }
  return state
}

// ─────────────────────────────────────────────
// Set check — returns { state, matchWinner }
// ─────────────────────────────────────────────

function checkSet(state, maxSets) {
  const gA = state.gamesA
  const gB = state.gamesB
  let setWinner = null

  if ((gA >= 6 && gA - gB >= 2) || gA === 7) { setWinner = 'A' }
  else if ((gB >= 6 && gB - gA >= 2) || gB === 7) { setWinner = 'B' }

  if (!setWinner) return { state: refreshDisplay(state), matchWinner: null }

  state.setHistory.push({ a: gA, b: gB })

  if (setWinner === 'A') { state.setsA = state.setsA + 1 }
  else                   { state.setsB = state.setsB + 1 }

  state.gamesA = 0
  state.gamesB = 0
  refreshDisplay(state)

  const setsToWin = Math.ceil(maxSets / 2)
  const matchWinner = (state.setsA >= setsToWin || state.setsB >= setsToWin)
    ? setWinner
    : null

  return { state, matchWinner }
}

// ─────────────────────────────────────────────
// Win game
// ─────────────────────────────────────────────

function winGame(state, team, maxSets) {
  state.idxA       = 0
  state.idxB       = 0
  state.deuceState = ''

  if (team === 'A') { state.gamesA = state.gamesA + 1 }
  else              { state.gamesB = state.gamesB + 1 }

  rotateServe(state)
  refreshDisplay(state)

  return checkSet(state, maxSets)
}

// ─────────────────────────────────────────────
// Add point — main entry point
// Returns { state, matchWinner }
// matchWinner is 'A', 'B', or null
// ─────────────────────────────────────────────

export function addPoint(state, team, scoringMode, maxSets) {
  // Deuce / advantage states (only in advantage mode)
  if (state.deuceState === 'deuce') {
    state.deuceState = team === 'A' ? 'advA' : 'advB'
    return { state: refreshDisplay(state), matchWinner: null }
  }
  if (state.deuceState === 'advA') {
    if (team === 'A') return winGame(state, 'A', maxSets)
    state.deuceState = 'deuce'
    return { state: refreshDisplay(state), matchWinner: null }
  }
  if (state.deuceState === 'advB') {
    if (team === 'B') return winGame(state, 'B', maxSets)
    state.deuceState = 'deuce'
    return { state: refreshDisplay(state), matchWinner: null }
  }

  // Normal point
  const cur   = team === 'A' ? state.idxA : state.idxB
  const other = team === 'A' ? state.idxB : state.idxA

  if (cur === 3) {
    if (other === 3) {
      if (scoringMode === 'golden') {
        return winGame(state, team, maxSets)
      }
      state.deuceState = 'deuce'
      return { state: refreshDisplay(state), matchWinner: null }
    }
    return winGame(state, team, maxSets)
  }

  if (team === 'A') { state.idxA = cur + 1 }
  else              { state.idxB = cur + 1 }

  return { state: refreshDisplay(state), matchWinner: null }
}

// ─────────────────────────────────────────────
// Build result params for router
// ─────────────────────────────────────────────

export function buildResultParams(state, teamA, teamB, winner) {
  return {
    teamA:      teamA,
    teamB:      teamB,
    setsA:      state.setsA,
    setsB:      state.setsB,
    winner:     winner === 'A' ? teamA : teamB,
    setHistory: JSON.stringify(state.setHistory)
  }
}
