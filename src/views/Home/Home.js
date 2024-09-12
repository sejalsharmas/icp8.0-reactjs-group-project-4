import React, { useEffect } from 'react';
import "./Home.css";
import Footer from '../../components/Footer/Footer';
import job from './img.png';
import { toast } from 'react-hot-toast';
import { highDemandJobs,newsArticles,FAQ } from '../../config/homeData';


function Home() {
  useEffect(() => {
    toast.loading('Loading content...');
    setTimeout(() => {
      toast.dismiss();
      toast.success('Content loaded successfully!');
    }, 1000);
  }, []);

  return (
    <div>
      <div className='content-container'>
        <div className='content'>
          <h1 className='liner-text'>Empower Your Future -</h1>
          <h4>Explore Jobs, Apply, and Advance</h4>
          <p className='intro-paragraph'>
            Discover a wide range of job opportunities and resources designed to help you achieve your career goals. Whether you’re looking for a new position or want to enhance your skills, we provide tools and guidance to support your journey. Start exploring today and take the first step towards a brighter future.
          </p>
          <div className='buttons'>
            <button type='button'>Login</button>
            <button type='button'>Sign up</button>
          </div>
        </div>

        <div className='content-img'>
          <img src={job} alt='Content-Img' />
        </div>
      </div>

      <div className='high-demand-jobs'>
        <h3>High-Demand Jobs..</h3>
        <div className='job-list'>
          {highDemandJobs.map((job, index) => (
            <div key={index} className='job-item'>
              <img src={job.imgSrc} alt={job.alt} className='job-img' />
              <h4>{job.title}</h4>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='news-section'>
        <h3>Latest News</h3>
        <div className='news-list'>
          {newsArticles.map((news, index) => (
            <article key={index} className='news-item'>
              <h4>{news.title}</h4>
              <p>{news.description}</p>
              <span className='news-date'>{news.date}</span>
            </article>
          ))}
        </div>
        <div className='view-news-button-container'>
          <button className='view-news-button' type='button'>View News</button>
        </div>
      </div>

      <div className='faq-section'>
        <h3>Frequently Asked Questions..</h3>
        <div className='faq-list'>
          {FAQ.map((item, index) => (
            <div key={index} className='faq-item'>
              <h4>{item.head}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
<div className='show'>
  
</div>


      <Footer />
    </div>
  );
}

export default Home;
