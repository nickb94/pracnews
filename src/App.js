import React from 'react';

//importing Modules
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
import { Card } from "./components/Card/Card";
import { AuthorCard } from "./components/AuthorCard/AuthorCard";
import { Subheading } from "./components/Subheading/Subheading";

//importing Styles
import './App.css';

const App = () => {

  const [data, setData] = React.useState("");

  React.useEffect(() => {

    fetch("/api/v1/collections/entertainment", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'mode': 'no-cors'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setData(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="App">
        <Header />
        <div className="path">
          Homepage > Latest
          </div>{
          data ?
            data.items.map(item =>

              <div key={item.id} className="card_wrap">
                <div className="image_wrap">
                  <div className="dummy_image"><a target="__blank" rel="noreferrer noopener" alt="pic" href={item.story.url}><span></span></a></div>
                </div>
                <div className="content_wrap">
                  <div className="padding">
                    <div className="section_name">{item.story.sections[0]['name']}</div>
                    <Card headline={item.story.headline} url={item.story.url} />
                    <div className="author_wrap">
                      <div className="center_div" key={item.id}>{item.story.authors.map(author => <AuthorCard key={author.id} name={author.name} pic={author['avatar-url']} date={new Date(item.story['last-published-at'])} />)}<div className="read_time">{item.story['read-time']} min read</div></div>
                    </div>
                    <div className="description_wrap">
                      <Subheading subheading={item.story.subheadline} />
                    </div>
                  </div>
                </div>
              </div>
            )
            :
            null
        }
        <Footer />
      </div>
    </>
  );
}

export default App;
