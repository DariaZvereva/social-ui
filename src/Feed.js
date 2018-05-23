import React, {Component} from 'react'
import './styles.css'

class Feed extends Component {
    render() {
        return (
                <div class="feed">
                    <div class="feed_head">
                        <img src="../data/avatar.jpg" className="feed_avatar" alt="avatar"/>
                        <div>Аватар Аанг</div>
                    </div>
                    <p>Какая-то очень интересная новость моего друга!!!!!!!</p>
                </div>
        );
    }
}

export default Feed;