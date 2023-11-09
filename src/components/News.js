import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
  };

  static propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [
         {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By <a href=\"/profiles/tara-subramaniam\">Tara Subramaniam</a>, <a href=\"/profiles/andrew-raine\">Andrew Raine</a>, <a href=\"/profiles/lauren-moorhouse\">Lauren Said-Moorhouse</a>, Thom Poole and Sophie Tanno, CNN",
            "title": "Israel says ground operations expanding in Gaza as war with Hamas rages: Live updates - CNN",
            "description": "The Israel Defense Forces announced Friday it is \"expanding ground operations\" in the Gaza Strip and \"operating forcefully\" on all fronts to fulfill its goals in the war with Hamas. Follow for live updates.",
            "url": "https://www.cnn.com/middleeast/live-news/israel-hamas-war-gaza-news-10-28-23/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/231027141230-ataques-aereos-gaza-israel-brk-redaccion-buenos-aires-tv-00020127-super-tease.jpg",
            "publishedAt": "2023-10-28T11:49:00Z",
            "content": "Israeli ground forces are inside Gaza having entered the enclave overnight from the north, army spokesman Daniel Hagari said Saturday morning.\r\nIsraeli forces went into the Gaza Strip and expanded th… [+1433 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Tyson Fury vs. Francis Ngannou: Fight card, odds, start time, PPV price, date, location, complete guide - CBS Sports",
            "description": "Fury vs. Ngannou is a once-in-a-lifetime spectacle between arguably boxing and MMA's best heavyweights",
            "url": "https://www.cbssports.com/boxing/news/tyson-fury-vs-francis-ngannou-fight-card-odds-start-time-ppv-price-date-location-complete-guide/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/19/0f16f361-417b-4c60-9ea8-b6eadd2e4fb6/thumbnail/1200x675/31d7b892334e219efb668289f5c03105/fury-ngannou-presser.jpg",
            "publishedAt": "2023-10-28T11:30:00Z",
            "content": "One of the biggest events of the year, quite literally, is set to kick off this weekend. A dream matchup of top heavyweights in boxing and MMA is set to go down in Riyadh, Saudi Arabia on Saturday ni… [+4639 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Jody Godoy, Luc Cohen",
            "title": "Sam Bankman-Fried admits 'mistakes' but testifies he did not defraud anyone - Reuters",
            "description": "FTX founder Sam Bankman-Fried, testifying in his own defense at his <a href=\"/legal/sam-bankman-fried-could-take-stand-fraud-trial-over-ftx-collapse-2023-10-26/\">fraud trial</a> on Friday, said a \"lot of people got hurt\" when the cryptocurrency exchange colla…",
            "url": "https://www.reuters.com/legal/sam-bankman-fried-jury-hear-ftx-founders-testimony-fraud-trial-2023-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/VC-Jb8je5d8UZ5sNIEzdW35kkXk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q2N2UR7HDRKLHCDMWRYYJIENA4.jpg",
            "publishedAt": "2023-10-28T11:25:00Z",
            "content": "NEW YORK, Oct 27 - FTX founder Sam Bankman-Fried, testifying in his own defense at his fraud trial on Friday, said a \"lot of people got hurt\" when the cryptocurrency exchange collapsed last year, but… [+4795 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "The real threat Dean Phillips poses to Biden - POLITICO",
            "description": "The danger for President Joe Biden isn’t that Rep. Dean Phillips is a threat in the primary.",
            "url": "https://www.politico.com/news/2023/10/28/dean-philips-joe-biden-threat-00124082",
            "urlToImage": "https://static.politico.com/2b/2c/5bf95ea44d3c9dda531489267ed7/gettyimages-1749105548-1.jpg",
            "publishedAt": "2023-10-28T11:00:00Z",
            "content": "I am younger, the 54-year-old congressmember told NBC News on Friday afternoon, calling Bidens five decades in federal office actually part of the problem.\r\nThat argument could very well pull some De… [+7013 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Israel support in New York City tests politicians' allegiances - POLITICO",
            "description": "Coalitions that previously overlooked Israel-Palestine divisions are now in jeopardy, and with them a broader check on moderate Democrats.",
            "url": "https://www.politico.com/news/2023/10/28/middle-east-conflict-new-york-city-00124046",
            "urlToImage": "https://static.politico.com/e3/06/58bd027d43549044dcc06133566a/ap23285842929222.jpg",
            "publishedAt": "2023-10-28T11:00:00Z",
            "content": "But now, in the state with the biggest Jewish population outside Israel, disparate groups are splintering over their position on Hamas surprise invasion and the Israeli governments response. And that… [+9338 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Adam Pourahmadi",
            "title": "Iranian teen Armita Geravand dies following alleged assault by morality police - CNN",
            "description": "A teenage Iranian girl who fell into a coma after she was allegedly assaulted by the country’s morality police for not wearing a headscarf has died, according to Iranian state media.",
            "url": "https://www.cnn.com/2023/10/28/world/armita-geravand-iranian-teen-dies-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231004123353-01-armita-geravand-iran.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-10-28T10:38:00Z",
            "content": "A teenage Iranian girl who fell into a coma after she was allegedly assaulted by the countrys morality police for not wearing a headscarf has died, according to Iranian state media.\r\nUnfortunately, t… [+2147 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "5 things to know about a stunning week for the economy - NPR",
            "description": "The U.S. economy continues to defy gravity, growing rapidly despite high interest rates. Consumer spending is powering the expansion, but it's not clear how long that can last.",
            "url": "https://www.npr.org/2023/10/28/1208846395/economy-gdp-inflation-interest-rates-soft-landing-recession",
            "urlToImage": "https://media.npr.org/assets/img/2023/10/27/gettyimages-1741358013_wide-313156d18931aa4d4c794aff7d3fa69f26a6f67b-s1400-c100.jpg",
            "publishedAt": "2023-10-28T10:01:06Z",
            "content": "A shopper carries a shopping bag while walking through an outdoor shopping center in Corte Madera, Calif., on Oct. 17. Strong consumer spending is helping to power the economy but it may not last.\r\nJ… [+5597 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Gaza’s communications blackout raises concerns of Israeli war crimes - Al Jazeera English",
            "description": "Enclave without phone, internet services for more than 12 hours amid warnings blackout could conceal rights abuses.",
            "url": "https://www.aljazeera.com/news/2023/10/28/gaza-under-communications-blackout-amid-warnings-of-cover-for-war-crimes",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/10/33ZB8WY-highres-1-1698475270.jpg?resize=1920%2C1440",
            "publishedAt": "2023-10-28T09:22:00Z",
            "content": "Gaza continues to be unreachable to the outside world after the cutting of phone and internet services, as humanitarian and media organisations warn the communications blackout could provide cover fo… [+4379 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Associated Press",
            "title": "Li Keqiang death: Former Chinese Premier dies of heart attack at 68 - USA TODAY",
            "description": "Li Keqiang was China’s No. 2 leader for a decade but was left with little authority after President Xi made himself the most powerful Chinese leader.",
            "url": "https://www.usatoday.com/story/news/world/2023/10/27/li-keqiang-china-death-heart-attack/71340298007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/27/USAT/71340304007-ap-china-obit-li-keqiang.JPG?crop=4999,2812,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-10-28T08:44:15Z",
            "content": "BEIJING Former Premier Li Keqiang, Chinas top economic official for a decade, died Friday of a heart attack. He was 68.\r\nLi was Chinas No. 2 leader from 2013-23 and an advocate for private business b… [+7225 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "A Halloween Treat: NASA's Juno Mission Glimpses an Eerie “Face” on Jupiter - SciTechDaily",
            "description": "During its 54th flyby, NASA's Juno captured an image of Jupiter's Jet N7 region, revealing turbulent clouds and the planet's terminator. Processed by Vladimir Tarasov, this image has intrigued scientists and displayed pareidolia effects. Juno's Stunning Captu…",
            "url": "https://scitechdaily.com/a-halloween-treat-nasas-juno-mission-glimpses-an-eerie-face-on-jupiter/",
            "urlToImage": "https://scitechdaily.com/images/NASA-Juno-Mission-Eerie-Face-on-Jupiter-Crop.jpg",
            "publishedAt": "2023-10-28T08:25:42Z",
            "content": "ByJet Propulsion LaboratoryOctober 28, 2023\r\nOn September 7, 2023, during its 54th close flyby of Jupiter, NASAs Juno mission captured this view of an area in the giant planets far northern regions c… [+4381 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Taylor Swift Won't Attend Travis Kelce Chiefs Game This Sunday, It's Tour Time - TMZ",
            "description": "Taylor Swift has been a fixture at a bunch of Travis Kelce's games this season, but that's not gonna happen this weekend ... cuz her multibillion-dollar tour is about to start back up.",
            "url": "https://www.tmz.com/2023/10/28/taylor-swift-not-attend-travis-kelce-chiefs-game-eras-tour/",
            "urlToImage": "https://imagez.tmz.com/image/93/16by9/2023/10/27/934a4cd7fa8744b6af5de1a150e16072_xl.jpg",
            "publishedAt": "2023-10-28T08:00:00Z",
            "content": "Taylor Swift has been a fixture at a bunch of Travis Kelce's games this season, but that's not gonna happen this weekend ... cuz her multibillion-dollar tour is about to start back up.\r\nSources with … [+1318 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": null,
            "title": "Donald Trump is set to testify Nov. 6 in his New York civil fraud trial - NPR",
            "description": "It was already expected the former president and sons Donald Jr. and Eric would testify. The timing became clear Friday, after Judge Arthur Engoron ruled that daughter Ivanka Trump also must appear.",
            "url": "https://www.npr.org/2023/10/28/1209241616/donald-trump-new-york-civil-fraud-trial",
            "urlToImage": "https://media.npr.org/assets/img/2023/10/28/ap23298746933052_wide-8a1ae91a81c7cd5dcebb1ecd73f0f2f48d5a6f30-s1400-c100.jpg",
            "publishedAt": "2023-10-28T07:35:22Z",
            "content": "Former President Donald Trump arrives at the courtroom for his civil business fraud trial at New York Supreme Court on Oct. 25, 2023.\r\nYuki Iwamura/AP\r\nNEW YORK Donald Trump is set to testify Nov. 6 … [+4442 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "MLB.com"
            },
            "author": "Kennedi Landry",
            "title": "Corey Seager sparks Rangers' comeback in 2023 World Series Game 1 - MLB.com",
            "description": "ARLINGTON -- As soon as the ball left his bat, Corey Seager knew. He didn’t even watch the ball as it sailed 418 feet into the crowd in right field.\nSeager, normally the most stoic of baseball players, opted to look toward the Rangers’ dugout, screaming to hi…",
            "url": "https://www.mlb.com/news/corey-seager-rangers-comeback-world-series-game-1-2023",
            "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/vnqpcqoz7hzkz9zrhsmz.jpg",
            "publishedAt": "2023-10-28T07:22:53Z",
            "content": "ARLINGTON -- As soon as the ball left his bat, Corey Seager knew. He didnt even watch the ball as it sailed 418 feet into the crowd in right field.\r\nSeager, normally the most stoic of baseball player… [+4005 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Joanna Ossinger",
            "title": "Goldman Says Souring US Growth Views May Create Stocks Bargains - Bloomberg",
            "description": "Markets have grown more pessimistic about the outlook for US economic growth, and if that continues in a substantial way it may offer a chance to buy stocks, according to Goldman Sachs Group Inc.",
            "url": "https://www.bloomberg.com/news/articles/2023-10-28/goldman-says-souring-us-growth-views-may-create-stocks-bargains",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTcuhlYjAPsY/v0/1200x801.jpg",
            "publishedAt": "2023-10-28T05:38:14Z",
            "content": "Markets have grown more pessimistic about the outlook for US economic growth, and if that continues in a substantial way it may offer a chance to buy stocks, according to Goldman Sachs Group Inc.\r\nTh… [+413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Blackout In Gaza After Israel’s ‘Most Intense’ Strikes; Hamas Fires Rockets At Israeli Towns | Watch - Hindustan Times",
            "description": null,
            "url": "https://www.youtube.com/watch?v=SlsBXQTqL_I",
            "urlToImage": null,
            "publishedAt": "2023-10-28T04:36:50Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": "the-globe-and-mail",
                "name": "The Globe And Mail"
            },
            "author": "Sally Brompton",
            "title": "Your daily horoscope: October 28 - The Globe and Mail",
            "description": "Your daily horoscope",
            "url": "https://www.theglobeandmail.com/life/horoscopes/article-your-daily-horoscope-october-28-5/",
            "urlToImage": "https://www.theglobeandmail.com/resizer/v2/NJJCPXZTTZAWPEWSR7U4DHYWEQ.png?auth=3107e3617eb00de782d9e34624621099e926c34ed6306bacda2372e6e60edd8c&width=1200&height=801&quality=80",
            "publishedAt": "2023-10-28T04:00:00Z",
            "content": "Open this photo in gallery:\r\nScorpio.iStockPhoto / Getty Images\r\nHOROSCOPES IF TODAY IS YOUR BIRTHDAY\r\nA lunar eclipse on your birthday means you will have to deal with people who seriously rub you t… [+3427 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KSAT San Antonio"
            },
            "author": "Avery Everett",
            "title": "'She declined so fast': Parents, doctors warn of RSV as cases increase across San Antonio - KSAT San Antonio",
            "description": "The CDC issued a Health Alert Network Health Advisory to provide options for doctors to protect infants from RSV as there is a limited supply of nirsevimab, a monoclonal antibody immunization to help with RSV.",
            "url": "https://www.ksat.com/news/local/2023/10/28/she-declined-so-fast-parents-doctors-warn-of-rsv-as-cases-increase-across-san-antonio/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/10-28-2023/t_3106a357ad184e7eae95f810bd82a6f8_name_image.jpg?_a=ATAPphC0",
            "publishedAt": "2023-10-28T01:51:27Z",
            "content": "SAN ANTONIO Taylor Roby Perez said the week her daughter, Isabel, was diagnosed with Respiratory Syncytial Virus (RSV) felt like a rollercoaster.\r\nShe declined so fast, Roby Perez said. She went from… [+2517 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "OregonLive"
            },
            "author": "Joel Odom | The Oregonian/OregonLive",
            "title": "Pac-12 college football Week 9 score predictions, odds: Will Ducks, Beavers win on the road? - OregonLive",
            "description": "It's a big Saturday across the Pac-12 football landscape.",
            "url": "https://www.oregonlive.com/collegefootball/2023/10/pac-12-college-football-week-9-score-predictions-odds-will-ducks-beavers-win-on-the-road.html",
            "urlToImage": "https://www.oregonlive.com/resizer/By_04S8mecyRh7PVBWt930aV0gw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/Y4BGAP4OYBF3DN2QXEHXSDQU4I.jpg",
            "publishedAt": "2023-10-28T00:18:00Z",
            "content": "From the showdown in Salt Lake City to the battle after dark in the desert, its a big Saturday across the Pac-12 college football landscape.\r\nThe Week 9 action begins early in the afternoon in Salt L… [+4077 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Dow Jones Futures: Apple, Fed Loom For Battered Market; Microsoft Leads Stocks To Watch - Investor's Business Daily",
            "description": null,
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-apple-fed-loom-for-battered-market-microsoft-leads-stocks-to-watch/",
            "urlToImage": null,
            "publishedAt": "2023-10-27T23:47:00Z",
            "content": null
        }
    ], 
      
      page: 1,
      loading: false,
      totalResults: 0, // Add totalResults to state
    };
  }

  async componentDidMount() {
    console.log('cdm');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=318505aa19944bae887fce864f27282f&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log('Previous');
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=318505aa19944bae887fce864f27282f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  handleNextClick = async () => {
    console.log('Next');
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=318505aa19944bae887fce864f27282f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ loading: false });
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container my-3"></div>
        <h1 className="text-center">NewsMonkey - Top headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitem
                    title={element.title.slice(0, 45)}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-warning"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-danger"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
