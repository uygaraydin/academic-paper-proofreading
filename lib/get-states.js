function getStates() {
  return {
    "WAITING": 1,
    "EXAMINING": 2,
    "REJECTED": 3,
    "READY_FOR_DOWNLOAD": 4
  }
}

module.exports = getStates