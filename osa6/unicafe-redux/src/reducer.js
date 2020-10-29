const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  console.log(state.good)
  switch (action.type) {
    case 'GOOD':
      const changedGood = {
        good: state.good+1,
        ok: state.ok,
        bad: state.bad
      }
      return changedGood
    case 'OK':
      const changedOk = {
        good: state.good,
        ok: state.ok+1,
        bad: state.bad
      }
      return changedOk
    case 'BAD':
      const changedBad = {
        good: state.good,
        ok: state.ok,
        bad: state.bad+1
      }
      return changedBad
    case 'ZERO':
      const changedZero = {
        good: 0,
        ok: 0,
        bad: 0
      }
      return changedZero
    default: return state
  }
  
}

export default counterReducer