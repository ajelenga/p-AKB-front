componentDidMount()
{
    // GET request using axios with set headers
    const headers = {
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };
    axios.get('https://api.npms.io/v2/search?q=react', {headers})
        .then(response => this.setState({totalReactPackages: response.data.total}));
}