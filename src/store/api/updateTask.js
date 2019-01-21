import axios from 'axios';

export default (data) => {
    const options = {
        method: 'PUT',
        url: "http://this.server/api/updateTask/taskid-123",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify(data)
    }
    return axios(options);
}