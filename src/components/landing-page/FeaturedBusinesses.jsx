import { Button } from "react-bootstrap";
import {
  ArrowRightCircle,
  CardChecklist,
  Heart,
  StarFill,
} from "react-bootstrap-icons";

const FeaturedBusinesses = () => {
  return (
    <div
      style={{ height: "340px" }}
      className="col-12 overflow-x-scroll p-2 p-sm-3 shadow-sm hero-pad"
    >
      <div className="d-flex gap-3">
        {featureCompanies.map((el) => (
          <Featured
            companyName={el.companyName}
            ratings={el.ratings}
            logo={el.logo}
            category={el.category}
            key={el}
          />
        ))}
      </div>
    </div>
  );
};

const Featured = ({ companyName, ratings, logo, category }) => {
  return (
    <div className="featured-business col-xxl-4 col-lg-5 col-md-6 col-sm-7 hero-pad shadow-sm px-4 py-3 image-filter image-unfilter">
      <div className="position-relative  d-flex justify-content-end">
        <Button
          variant="transparent"
          className="position-absolute border-0"
          title="Add to favorites"
          aria-label="Add to favorites"
        >
          <Heart focusable="false" />
        </Button>
      </div>
      <img
        className="img-fluid"
        src={logo}
        alt={`${companyName}_logo`}
        style={{ height: 187, width: "fit-content" }}
      />
      <span className="hstack gap-2 mt-2">{companyName}</span>
      <small className="hstack gap-2">
        <CardChecklist /> {category}
      </small>
      <div className="hstack gap-5 justify-content-between featured-click">
        <small className="hstack gap-2">
          Ratings
          {[...Array(Math.floor(ratings)).keys()].map((item) => (
            <StarFill style={{ color: "gold" }} key={item} />
          ))}
        </small>
        <Button
          size="sm"
          className=" mt-2 border-0 brand-color custom-pry rounded-5 text-light"
          title="View business"
          aria-label="View business"
        >
          <ArrowRightCircle focusable={false} />
        </Button>
      </div>
    </div>
  );
};

const featureCompanies = [
  {
    companyName: "Spotify",
    category: "Multimedia",
    ratings: 4.2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },
  {
    companyName: "Apple",
    category: "Electronics",
    ratings: 3.7,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    companyName: "Microsoft",
    category: "Information Technology",
    ratings: 4.6,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    companyName: "Amazon",
    category: "E-commerce",
    ratings: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    companyName: "Tesla",
    category: "Vehicles",
    ratings: 4.4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    companyName: "Netflix",
    category: "'Multimedia",
    ratings: 4.3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    companyName: "Google",
    category: "Advertising",
    ratings: 4.8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
];

export default FeaturedBusinesses;
