import Defaults from './Defaults'
import * as Actions from './Actions'

/**
 * The reducer for the redux store
 * @param {StoreState} state
 * @param {Object} param1
 * @param {String}  param1.type
 * @param {*}  param1.data
 */
let Reducer = (state = Defaults, {
  type,
  data
}) => {
  switch (type) {
    /** Basic control data */
    case Actions.POD_START:
      {
        return changeControl(state, data, 'start')
      }
    case Actions.EMERGENCY_STOP:
      {
        return changeControl(state, data, 'emergencyStop')
      }
    case Actions.CHANGE_SPEED:
      {
        return changeControl(state, data, 'speed')
      }
    case Actions.CHANGE_ACCELERATION:
      {
        return changeControl(state, data, 'acceleration')
      }
    case Actions.CHANGE_BRAKE:
      {
        return changeControl(state, data, 'brake')
      }
    case Actions.CHANGE_BALL_VALVE:
      {
        return changeControl(state, data, 'ballValve')
      }
    case Actions.CHANGE_DPR:
      {
        return changeControl(state, data, 'DPR')
      }
    case Actions.CHANGE_MAGWHEEL_SPEED:
      {
        return changeControl(state, data, 'magwheel')
      }
    case Actions.CHANGE_DRIVETRAIN_SPEED:
      {
        return changeControl(state, data, 'driveTrain')
      }
    case Actions.CHANGE_MTV:
      {
        return changeControl(state, data, 'MTV')
      }
    case Actions.CHANGE_EC_SOLENOID:
      {
        return changeControl(state, data, 'ECSolenoid')
      }
    case Actions.CHANGE_DRIVE_SOLENOID:
      {
        return changeControl(state, data, 'driveSolenoid')
      }
    case Actions.CHANGE_DRIVE_SAFETY:
      {
        return changeControl(state, data, 'driveSafety')
      }
    case Actions.CHANGE_LAUNCH:
      {
        return changeControl(state, data, 'launch')
      }
    case Actions.CHANGE_CONTROL_INSTANT:
      {
        return changeSetting(state, data, 'instantChange')
      }
    case Actions.CHANGE_CONTROL_MANUAL:
      {
        let newSetting = Object.assign({}, state.controlSettings, {
          manualControlMode: true,
          scriptControlMode: false,
          autoControlMode: false
        })

        return Object.assign({}, state, {
          controlSettings: newSetting
        })
      }

    case Actions.CHANGE_CONTROL_AUTO:
      {
        let newSetting = Object.assign({}, state.controlSettings, {
          manualControlMode: false,
          scriptControlMode: false,
          autoControlMode: true
        })

        return Object.assign({}, state, {
          controlSettings: newSetting
        })
      }

    case Actions.CHANGE_CONTROL_SCRIPT:
      {
        let newSetting = Object.assign({}, state.controlSettings, {
          manualControlMode: false,
          scriptControlMode: true,
          autoControlMode: false
        })

        return Object.assign({}, state, {
          controlSettings: newSetting
        })
      }
    case Actions.CHANGE_KEEP_LAST_DATA:
      {
        return changeSetting(state, data, 'keepLastData')
      }

      /** Pod reported 'actual' values */
    case Actions.UPDATE_CONTROL_EMERGENCY_STOP:
      {
        return changeControl(state, data, 'emergencyStopActual')
      }
    case Actions.UPDATE_CONTROL_POD_START:
      {
        return changeControl(state, data, 'startActual')
      }
    case Actions.UPDATE_CONTROL_DROP:
      {
        return changeControl(state, data, 'dropActual')
      }
    case Actions.UPDATE_CONTROL_LEVITATION:
      {
        return changeControl(state, data, 'levitationActual')
      }
    case Actions.UPDATE_CONTROL_BRAKE:
      {
        return changeControl(state, data, 'brakeActual')
      }
    case Actions.UPDATE_CONTROL_BALL_VALVE:
      {
        return changeControl(state, data, 'ballValveActual')
      }
    case Actions.UPDATE_CONTROL_DPR:
      {
        return changeControl(state, data, 'DPRActual')
      }
    case Actions.UPDATE_CONTROL_MAGWHEEL_SPEED:
      {
        return changeControl(state, data, 'magwheelActual')
      }
    case Actions.UPDATE_CONTROL_DRIVETRAIN_SPEED:
      {
        return changeControl(state, data, 'driveTrainActual')
      }
    case Actions.UPDATE_CONTROL_MTV:
      {
        return changeControl(state, data, 'MTVActual')
      }
    case Actions.UPDATE_CONTROL_EC_SOLENOID:
      {
        return changeControl(state, data, 'ECSolenoidActual')
      }
    case Actions.UPDATE_CONTROL_DRIVE_SOLENOID:
      {
        return changeControl(state, data, 'driveSolenoidActual')
      }
    case Actions.UPDATE_CONTROL_DRIVE_SAFETY:
      {
        return changeControl(state, data, 'driveSafetyActual')
      }
    case Actions.UPDATE_CONTROL_LAUNCH:
      {
        return changeControl(state, data, 'launchActual')
      }

      /*
       * Data updates received from the pod
       *
       * This section handles hen the pod sends repeated polled data which
       * needs to be added to an array
       *
       * A lot of cases here uses addToData(), it is just a helper
       * function to concat the data into the correct field
       *
       */

    case Actions.UPDATE_DATA_LEV_TANK_PRESSURE:
      {
        return addToData(state, data, 'tankPressure', 'levData')
      }
    case Actions.UPDATE_DATA_LEV_REGULATOR_OUTPUT:
      {
        return addToData(state, data, 'regulatorOutput', 'levData')
      }
    case Actions.UPDATE_DATA_LEV_PHOTO:
      {
        return addToData(state, data, 'photo', 'levData')
      }
    case Actions.UPDATE_DATA_EC_PHOTO:
      {
        return addToData(state, data, 'photo', 'ECData')
      }
    case Actions.UPDATE_DATA_EC_TEMP:
      {
        return addToData(state, data, 'temp', 'ECData')
      }
    case Actions.UPDATE_DATA_MW_RPM:
      {
        return addToData(state, data, 'RPM', 'MWData')
      }
    case Actions.UPDATE_DATA_MW_TEMP:
      {
        return addToData(state, data, 'temp', 'MWData')
      }
    case Actions.UPDATE_DATA_DRIVE_TEMP:
      {
        return addToData(state, data, 'temp', 'driveData')
      }
    case Actions.UPDATE_DATA_DRIVE_REED:
      {
        return addToData(state, data, 'reed', 'driveData')
      }
    case Actions.UPDATE_DATA_DRIVE_CURRENT:
      {
        return addToData(state, data, 'current', 'driveData')
      }
    case Actions.UPDATE_DATA_POD_BATTERY_TEMP:
      {
        return addToData(state, data, 'batteryTemp', 'podData')
      }
    case Actions.UPDATE_DATA_POD_BATTERY_VOLT:
      {
        return addToData(state, data, 'batteryVolt', 'podData')
      }
    case Actions.UPDATE_DATA_POD_BATTERY_AMP:
      {
        return addToData(state, data, 'batteryAmp', 'podData')
      }
    case Actions.UPDATE_DATA_POD_REGULATOR:
      {
        return addToData(state, data, 'regulator', 'podData')
      }
    case Actions.UPDATE_DATA_POD_IMU:
      {
        return addToData(state, data, 'IMU', 'podData')
      }
    case Actions.UPDATE_DATA_POD_COLOR:
      {
        return addToData(state, data, 'color', 'podData')
      }
    case Actions.UPDATE_DATA_POD_PUSHER:
      {
        return {
          ...state,
          podData: {
            ...state.podData,
            pusher: data
          }
        }
      }
    case Actions.UPDATE_DATA_POD_STATE:
      {
        return addToData(state, data, 'state', 'podData')
      }
    case Actions.UPDATE_DATA_POD_MESSAGES:
      {
        return addToData(state, data, 'messages', 'podData')
      }

      /** Network */
    case Actions.UPDATE_CONNECTION_STATE:
      {
        return changeConnection(state, data, 'connected')
      }

    default:
      return state
  }
}

function changeControl (state, data, field) {
  let newControl = Object.assign({}, state.controls, {
    [field]: data
  })

  return Object.assign({}, state, {
    controls: newControl
  })
}

function changeSetting (state, data, field) {
  let newSetting = Object.assign({}, state.controlSettings, {
    [field]: data
  })

  return Object.assign({}, state, {
    controlSettings: newSetting
  })
}

function changeConnection (state, data, field) {
  let newConnection = Object.assign({}, state.connection, {
    [field]: data
  })

  return Object.assign({}, state, {
    connection: newConnection
  })
}

function addToData (state, data, field, section) {
  let newData
  if (state.controlSettings.keepLastData) {
    newData = [data]
  } else {
    newData = state[section][field].concat([data])
  }

  return Object.assign({}, state, {
    [section]: Object.assign({}, state[section], {
      [field]: newData
    })
  })
}

export default Reducer
