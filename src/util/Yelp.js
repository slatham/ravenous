const apiKey = 'ZiyMX-nZEB8EpiQM-phyDUvldOcZKN0XIvZRCK-Nl47v53zwMqF9hj1yHq5TidM2xxhg5xpdOowZ9DZDRLDtc8mJgi189NbWQWeH-u7iULedkD2Esu0FYdk6_4X_XHYx';

const Yelp = {
    search(term, location, sortBy) {

        const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sory_by=${sortBy}`
        return fetch(corsAnywhereUrl + url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses) {
                console.log(jsonResponse.businesses)
                return jsonResponse.businesses.map((business) => {
                    
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count

                    }
                });
            }
        })
    }
};

export default Yelp;