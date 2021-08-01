import axios from 'axios';

const fetcherGet = (url: string) => axios.get(url).then((res) => res.data);

export { fetcherGet };
