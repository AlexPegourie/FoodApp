import axios from 'axios';

export default axios.create({
 baseURL:'https://api.yelp.com/v3/businesses',
 headers: {
     Authorization: 'Bearer wo8y-tytzbeisDdjgi_XLA8r5ZiZEorzKJbmHXPPujgDX9RQZ-F8Z7wUVVl7Bg1KyGa0Sr6gvvRhvX8WupCMADcT6VDpulWGy0DjP--XLVBrq93HLyVx9xeBVcqCYHYx'
 }
});