import * as yup from 'yup'

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/
const REGEX_ONLY_NUMBER = /^\d+$/
yup.addMethod(yup.String, 'password', function (message,) {
    return this.matches(REGEX_PASSWORD, {
        message,
        excludeEmplyString: true,
    })
})
yup.addMethod(yup.String, 'onlyNumber', function (message,) {
    return this.matches(REGEX_ONLY_NUMBER, {
        message,
        excludeEmplyString: true,
    })
})
export default yup;