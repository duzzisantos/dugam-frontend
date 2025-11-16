import { Button } from "react-bootstrap";
import {
  ArrowRightCircle,
  CardChecklist,
  Heart,
  HeartFill,
  StarFill,
} from "react-bootstrap-icons";

const FeaturedBusinesses = ({ like, setLike }) => {
  const handleCompanyLike = (companyName) => {
    if (
      featureCompanies.find((company) => company.companyName === companyName)
    ) {
      setLike(!like);
    }
  };
  return (
    <div
      style={{ height: "fit-content" }}
      className="overflow-x-scroll overflow-y-hidden shadow-sm hero-pad"
    >
      <div className="d-flex gap-3">
        {featureCompanies.map((el) => (
          <Featured
            companyName={el.companyName}
            ratings={el.ratings}
            logo={el.logo}
            category={el.category}
            website={el.website}
            key={el.companyName}
            like={like}
            handleCompanyLike={() => handleCompanyLike(el.companyName)}
          />
        ))}
      </div>
    </div>
  );
};

const Featured = ({
  companyName,
  ratings,
  logo,
  category,
  website,
  handleCompanyLike,
  like,
}) => {
  return (
    <div className="featured-business col-xxl-3 col-lg-3 col-md-6 col-sm-10 hero-pad shadow-lg px-3 py-3 image-filter image-unfilter">
      <div className="position-relative  d-flex justify-content-end">
        <Button
          variant="transparent"
          className="position-absolute border-0"
          title="Add to favorites"
          aria-label="Add to favorites"
          onClick={() => handleCompanyLike(companyName)}
        >
          {like ? (
            <HeartFill focusable="false" className="text-danger" />
          ) : (
            <Heart focusable="false" />
          )}
        </Button>
      </div>
      <img
        className="img-fluid mb-3"
        src={logo}
        alt={`${companyName}_logo`}
        style={{ height: 187, width: "fit-content" }}
      />
      <span className="hstack gap-2 my-2">{companyName}</span>
      <small className="hstack gap-2 text-secondary">
        <CardChecklist /> {category}
      </small>
      <div className="hstack gap-5 justify-content-between featured-click py-3">
        <small className="hstack gap-2 text-secondary">
          Ratings
          {[...Array(Math.floor(ratings)).keys()].map((item) => (
            <StarFill style={{ color: "gold" }} key={item} />
          ))}
        </small>

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="btn mt-2 border-0 brand-color custom-pry rounded-5 text-light"
          title="View business"
          aria-label="View business"
        >
          <ArrowRightCircle focusable={false} />
        </a>
      </div>
    </div>
  );
};

const featureCompanies = [
  {
    companyName: "General Electric",
    category: "Electrical Hardware",
    ratings: 4.2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg",
    website: "https://www.ge.com",
  },
  {
    companyName: "Microsoft",
    category: "Information Technology",
    ratings: 4.6,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    website: "https://www.microsoft.com",
  },

  {
    companyName: "Apple",
    category: "Electronics",
    ratings: 3.7,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    website: "https://www.apple.com",
  },

  {
    companyName: "Geico",
    category: "Insurance",
    ratings: 5,
    logo: "https://1000logos.net/wp-content/uploads/2023/01/GEICO-logo.png",
    website: "https://www.geico.com",
  },
  {
    companyName: "BMW",
    category: "Vehicles",
    ratings: 4.4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    website: "https://www.bmw.com",
  },
  {
    companyName: "LG",
    category: "'Electronics",
    ratings: 4.3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg",
    website: "https://www.lg.com",
  },
  {
    companyName: "Carrier",
    category: "HVAC",
    ratings: 4.2,
    logo: "https://upload.wikimedia.org/wikipedia/de/a/a6/Carrier-Logo.svg",
    website: "https://www.carrier.com",
  },
  {
    companyName: "Hisense",
    category: "Electronics",
    ratings: 4.8,
    logo: "https://images.seeklogo.com/logo-png/28/1/hisense-logo-png_seeklogo-285063.png",
    website: "https://www.hisense.com",
  },
];

export default FeaturedBusinesses;
