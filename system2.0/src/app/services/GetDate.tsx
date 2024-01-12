import moment from 'moment'

const GetDate = ()=>{

    const date = moment()

    return date.format('DD-MM-YYYY')
}

export default GetDate