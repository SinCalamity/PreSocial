import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
function HomePage() {
  return (
    <Container style={{paddingTop: "15vh" }}>
      <div class="feed">
        <div class="feed-header">
            <h2>Home</h2>
          </div>
      
      {/*tweetbox*/ }
      <div className='tweetbox'>
        <form>
          <div className='tweetbox-input'>
            <Image src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"/>
            <input type='text' placeholder='What is on your mind?'/>
          </div>
          <Button className='tweetbox_tweetButton'>Post</Button>
        </form>
      </div>
      {/* Posting*/ }
      <div className='post'>
        <div className='post-avatar'>
          <Image src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"/>
          </div>
          <div className='post-body'>
          <div className='post-header'>
            <div className='post-header-text'>
              <h3>Lick</h3>
              <span class='post-headerspecial'>
                <span class='material-icons post_badge'>verified</span>
              </span>
              </div>
          </div>
          </div>
          </div>
        </div>
    </Container>
  )
}

export default HomePage