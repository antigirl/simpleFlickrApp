import 'whatwg-fetch';
import { config } from './config';

export function fetchImages() {
    return fetch(config.endPoint).then(function(data) {
        return data.json().then((data) => {
            return data.photos.photo.map((item)=> {
                return {
                    id: item.id,
                    title: item.title,
                    authorIcon: `http://flickr.com/buddyicons/${item.owner}.jpg`,
                    url: `http://farm${item.farm}.static.flickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`
                }
            });
        });
    }).catch((err) => {
        console.log('ERROR cannot fetch images', err);
        return err;
    });
}
