import Title from './Title';
import { tours } from '../data';
const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subtitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((el) => {
          return (
            <article key={el.id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={el.img} className='tour-img' alt='' />
                <p className='tour-date'>{el.tourDate}</p>
              </div>
              <div className='tour-info'>
                <h4>{el.tourTitle}</h4>
                <p>{el.tourText}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {el.tourCountry}
                  </p>
                  <p>{el.tourLength}</p>
                  <p>{el.tourPrice}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
