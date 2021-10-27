import React, { useEffect } from "react";
import { Navbar, Footer } from '../component';
import { Drawer, Button, Grid, Row, Col,Table, Avatar } from 'antd';
import CustomButton from "../component/Button";
import CompositionImg from '../assets/icons/Composition_13 4.png'
import compostion1 from '../assets/icons/Composition_11 1.png'
import composition2 from '../assets/icons/Composition_04 1.png'
import CupImg from '../assets/icons/05 1.png'
import img10 from '../assets/icons/image 10.png'
import img11 from '../assets/icons/image 11.png'
import img12 from '../assets/icons/image 12.png'
import img13 from '../assets/icons/image 13.png'
import img14 from '../assets/icons/image 14.png'
import img15 from '../assets/icons/image 15.png'
import image from '../assets/icons/Image.png'
import image1 from '../assets/icons/Image (1).png'
import image2 from '../assets/icons/Image (2).png'
import btc from '../assets/icons/btc.png'
import etherium from '../assets/icons/Group (1).png'
import afridex from '../assets/icons/Vector.png'
import binacnce from '../assets/icons/Group (1).png'
import ripple from '../assets/icons/coin symbol.png'
import Dogecoin from '../assets/icons/Polygon (1).png'
import pokercoin from '../assets/icons/Vector (3).png'
import litecoin from '../assets/icons/Vector (4).png'
import icon from '../assets/icons/Icon.png'
import avatar from '../assets/icons/Avatar.png'


const columns = [
    {
        title: '#',
        dataIndex: 'count'
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'age',
    },
    {
      title: '24h Change',
      dataIndex: 'address',
    },
  ];

  const coins = [{img: btc, name: 'BTC'}, {img: etherium, name: 'ETH'}, {img: afridex, name: 'AFDT'},  { img:binacnce, name: 'BNB'}, 
                { img:ripple, name:'XPR'}, { img: Dogecoin, name:'DOGE', pad: '6px'}, {img: pokercoin, name: 'DOT'}, {img:litecoin, name: 'LTC' } ]
  const data = [];
    for (let i = 0; i < coins.length; i++) {
    data.push({
        key: i,
        count: i + 1,
        name:<span className='hero-para'> <img style={{ paddingLeft: coins[i]?.pad && coins[i].pad}} className='icon' src={coins[i].img} alt='coin'  /> {coins[i].name} </span>,
        age: '$66.201.34',
        address: `+1.7%. ${i}`,
    });
}

// use magic comment
// const Navbar = React.lazy(() => import( /* webpackPrefetch:true */ '../component/Navbar'))

const Home = () => {

    // useEffect(() => {
    //     window.alert('Project under Development, still in progress. not fully responsive. Thanks for your understanding ')
    // })

    const pageSize = 20;


    return (
        <>
            <Navbar />
            <h3 className='hero-head centralize allow-padding' >Start Trading Crypto Assets</h3>
            <p className='hero-para centralize'>Trade With Safety, Ease & convenience </p>
            <div className=''style={{ margin: '70px 0 50px 0' }} >
                 <span></span>
                  <Table className='ant-design-content' columns={columns} dataSource={data} pagination={data.length > pageSize && { pageSize }} />
            </div>
            <div className='section-padding padding-top buy-section' style={{background: '#F4F9FF'}} >
                <Row >
                    <Col xs={24} md={12} span={12} style={{alignSelf: 'center'}}>
                        <h3 className='hero-head'>Buy AFRIDEX </h3>
                        <h3 className='hero-head'>Governance Token</h3>
                        <h3 className='hero-head'>$AFDT via AFRIDEX PAY </h3>
                        <div>
                            <p className='header-para'>Listing soon</p>
                        </div>
                        <button style={{
                            background: '#0F92BF', 
                            color: '#fff', 
                            padding: '5px 25px', 
                            border: 0, 
                            borderRadius:'5px',
                            fontSize: '18px',
                            fontWeight: 'normal'
                        }}>Buy Now</button>

                    </Col>
                    <Col xs={24} md={12} span={12} style={{alignSelf: 'center'}}>
                        <div className='svg-bg-div'>
                            <img src={CompositionImg} className='coin-img' alt="bucket img" />
                        </div>                
                    </Col>
                </Row>
            </div>
            {/* why use section */}
            <h3 className='hero-head centralize' style={{ padding: '70px 0 0 0' }}>Why Use AFRIDEX</h3>
            <div className='why-padding'>
            <span></span>
            <Row >
              
                <Col xs={24} md={7} span={8} style={{alignSelf: 'center'}}>
                    <div className='centralize' >
                       <img src={compostion1} width='130em' />
                    </div>
                    <div >
                        <h5 className='centralize todo-text'>Fast Support</h5>
                        <p className='hero-para centralize'>
                        Got a problem? Just get in touch.
                        Our support team is always avalilable 24/7
                        verification is within 6 hrs with a
                        live chat support
                        </p>
                    </div>
                </Col>
                <Col xs={24} md={7} span={8} style={{alignSelf: 'center'}}>
                    <div className='centralize'>
                       <img src={composition2} width='130em' />
                    </div>
                    <div >
                        <h5 className='centralize todo-text'>Transferrabe assets</h5>
                        <p className='hero-para centralize'>
                        AFRIDEX is the first exchange globally that transfers your Crypto
                        assets to your next of kin, 18 month after your account is inactive,
                        after sending series of emails to you.                    
                        </p>
                    </div>
                </Col>
                <Col xs={24} md={7} span={8} style={{alignSelf: 'center'}}>
                    <div className='centralize'>
                       <img src={CompositionImg} width='130em' />
                    </div>
                    <div >
                    <h5 className='centralize todo-text'>Community Focused</h5>
                        <p className='hero-para centralize'>
                        AFRIDEX is a community exchange, with an active global community
                        of representation fromat least 20+ countries.
                        </p>
                    </div>
                </Col>
            </Row>
            </div>


            {/* list your projects section */}
            <div className='section-padding padding-top list-section' style={{background: '#5BACD5'}}>
                <Row>
                    <Col xs={24} md={12} span={12} style={{alignSelf: 'center'}}>
                        <h3 className='hero-head white'>List your project token/ </h3>
                        <h3 className='hero-head white'>COIN on AFRIDEX </h3>
                        <h3 className='hero-head white'>exchange, it is fast </h3>
                        <h3 className='hero-head white'>and easy process!</h3>
                        <CustomButton 
                                bgColor='#fff'
                                textColor='#5BACD5'
                                title='APPLY HERE'
                            />
                    </Col>
                    <Col xs={24} md={12} span={12} style={{alignSelf: 'center'}}>
                        <div className='svg-bg-div'>
                            <img src={CupImg} className='cup-img' alt="cup img" />
                        </div>                
                    </Col>
                </Row>
            </div>


            {/* Ecosysytem section */}

            <p style={{textAlign: 'center', fontSize: '13px', color: '#0F92BF', marginTop: '7rem'}}>The Ecosysytem</p>
            <h3 className="hero-head centralize">AFRIDEX ECOSYSYTEM</h3>
            <p className='hero-para centralize word-text'>
                Afridex will release exciting products into the blockchain ecosysytem that will aid the 
                company's vision of deploying blockchain solutionto enhance cross-utilization and improvr the
                customer journey in the cryptocurency revolutions 
            </p>
            <div className='ecosystem'>
            <Row gutter={36} >
              
              <Col xs={24} md={8} span={8} style={{alignSelf: 'center'}}>
                  <div className='centralize' >
                     <img src={img10} width='50em' />
                  </div>
                  <div className='word-padding'>
                      <h5 className='centralize todo-text'>AFRIDEX Exchange</h5>
                      <p className='hero-para centralize'>
                      AFRIDEX Exchange will allow customer to trade cryptocurency or digital assets,
                      such as conventional FIAT money or other digital currencies 
                      </p>
                  </div>
              </Col>
              <Col xs={24} md={8} span={8} style={{alignSelf: 'center'}}>
                  <div className='centralize'>
                     <img src={img11} width='50em' />
                  </div>
                  <div className='word-padding' >
                      <h5 className='centralize todo-text'>AFRIDEX Pay</h5>
                      <p className='hero-para centralize'>
                     the AFRIDEX Paymet solution will help facilitate global remittance, business-to-customer
                     transactoins globally.
                      </p>
                  </div>
              </Col>
              <Col xs={24}  md={8} span={8} style={{alignSelf: 'center'}}>
                  <div className='centralize'>
                     <img src={img12} width='50em' />
                  </div>
                  <div className='word-padding'>
                  <h5 className='centralize todo-text'>AFRIDEX Finance</h5>
                      <p className='hero-para centralize'>
                      AFRIDEX Finance is a borrowing and lending platform that ebnables users to provide financing
                      for willing borrowers without the need for traditional collateral 
                      </p>
                  </div>
              </Col>
              <Col xs={24} md={8} span={8} style={{alignSelf: 'center'}}>
                  <div className='centralize' >
                     <img src={img13} width='50em' />
                  </div>
                  <div className='word-padding'>
                      <h5 className='centralize todo-text'>AFRIDEX Smart Chain</h5>
                      <p className='hero-para centralize'>
                      This platform focuses on providing a space for created Apps, other DEFI products and also ebnable
                       transactions in the blockchain network
                      </p>
                  </div>
              </Col>
              <Col xs={24} md={8} span={8} style={{alignSelf: 'center'}}>
                  <div className='centralize'>
                     <img src={img14} width='50em' />
                  </div>
                  <div className='word-padding' >
                      <h5 className='centralize todo-text'>AFRIDEX EduXtra</h5>
                      <p className='hero-para centralize'>
                      AFRIDEX EduXtra will help the human capita; development by creating learning Hub across Africa
                      dedicated to training the youth to become blockchain skilled expert
                      </p>
                  </div>
              </Col>
              <Col xs={24} md={8} span={8} style={{alignSelf: 'center'}}>
                  <div className='centralize'>
                     <img src={img15} width='50em' />
                  </div>
                  <div className='word-padding'>
                    <h5 className='centralize todo-text'>AFRIDEX NFT MarketPlace</h5>
                      <p className='hero-para centralize'>
                    AFRIDEX NFT MarketPlace will be used to trade non-fungible tokens(NFT) or digital assets,
                    which can be abything from objects like art, music, videos and memes.
                      </p>
                  </div>
              </Col>
          </Row>
          </div>
          {/* <Row gutter={8} style={{padding: '70px'}}>
              
             
          </Row> */}


            {/* Blog section  */}

            <div className='blog-section' >
                <span>Our blog</span>
                <h3 className='hero-head'>Latest blog posts</h3>
                <p className='hero-para'>
                    Tools and strategies modern teams to help their companies grow.
                </p>

            <Row gutter={12}>
              
              <Col xs={24} md={8} span={8} style={{alignSelf: 'center'}}>
                  <div>
                     <img src={image} className='blog-img' />
                  </div>
                  <span>Design</span>
                  <div className='word-padding' style={{ paddingLeft: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between'}} >
                        <h5 className='todo-text remove-marg'>UX review presentation</h5>
                        <img className='icon-img' src={icon} alt='icon'/>
                      </div>
                      <p className='hero-para'>
                        How do you create compelling presentation that wow your colleagues and 
                        impress your managers?
                      </p>
                  </div>
                  <div  style={{ display: 'flex'}} >
                      <div className='avatar-img'>
                          <img src={avatar} alt='avatar' />
                      </div>
                      <div>
                          <p className='avatar-name'>Usman Abiola</p>
                          <p className='hero-para avatar-date'>20 Jan 2022</p>
                      </div>
                  </div>
              </Col>
              <Col xs={24} md={8} span={8} style={{alignSelf: 'center'}}>
                  <div>
                     <img src={image1} className='blog-img' />
                  </div>
                  <span>products</span>

                  <div className='word-padding' style={{ paddingLeft: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between'}} >
                        <h5 className='todo-text remove-marg'>Migrating to Linear 101</h5>
                        <img className='icon-img' src={icon} alt='icon'/>
                      </div>
                      <p className='hero-para'>
                        Linear helps streamline Software projects, sprints, tasks, 
                        and bug tracking. Here's how to get started. 
                      </p>
                  </div>
                  <div  style={{ display: 'flex'}} >
                      <div className='avatar-img'>
                          <img src={avatar} alt='avatar' />
                      </div>
                      <div>
                          <p className='avatar-name'>Usman Abiola</p>
                          <p className='hero-para avatar-date'>20 Jan 2022</p>
                      </div>
                  </div>
              </Col>
              <Col xs={24} md={8} span={8} style={{alignSelf: 'center'}}>
                  <div>
                     <img src={image2} className='blog-img' />
                  </div>
                  <span>Software Engineering</span>

                  <div className='word-padding' style={{ paddingLeft: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between'}} >
                        <h5 className='todo-text remove-marg'>Software Engineering</h5>
                        <img className='icon-img' src={icon} alt='icon'/>
                      </div>
                      <p className='hero-para'>
                      The rise of RESTFUL APIs has been met by the rise fo creating, testing and managing them.  
                        and bug tracking. Here's how ?. 
                      </p>
                  </div>
                  <div  style={{ display: 'flex'}} >
                      <div className='avatar-img'>
                          <img src={avatar} alt='avatar' />
                      </div>
                      <div>
                          <p className='avatar-name'>Usman Abiola</p>
                          <p className='hero-para avatar-date'>20 Jan 2022</p>
                      </div>
                  </div>
              </Col>
              
          </Row>
            </div>

            <Footer />
          
        </>
    )
}


export default Home