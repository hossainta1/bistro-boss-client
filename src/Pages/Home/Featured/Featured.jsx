import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading="Featured Items"
                subHeading="Check it Out!"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where can i get some??</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, alias minus expedita sint maiores eum impedit laudantium fuga? Minus totam, fugit architecto nihil enim consequuntur quaerat aliquid at rem voluptatibus placeat, velit libero, incidunt eos qui? Natus nihil sint quos aspernatur minima blanditiis dolores voluptatibus accusamus et voluptatum? Tempore, ullam.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-3">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;