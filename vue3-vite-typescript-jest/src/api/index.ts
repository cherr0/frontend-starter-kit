const request = (url: string, config: RequestInit) =>
    fetch(url, {
        //headers: {

        //},
        ...config,
    })
        .then((data) => {
            // do somthing before request is sent
            return data;
        })
        .catch((error) => {
            // do somthing with request error
            return Promise.reject(error);
        });

export default request;
