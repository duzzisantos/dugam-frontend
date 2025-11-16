import { Button, Col, Form, FormGroup } from "react-bootstrap";
import {
  ArrowClockwise,
  Bank2,
  CardChecklist,
  Filter,
  Map,
  Search,
} from "react-bootstrap-icons";

const FindCustomers = ({
  search,
  setSearch,
  setCity,
  setRegion,
  category,
  city,
  region,
  setCategories,
  handleGeneralSearch,
  handleNarrowSearch,
  handleResetGeneral,
  handleResetNarrow,
  validated,
  validatedNarrow,
  groupedData,
}) => {
  const regions = Object.keys(groupedData).map((element) => element);

  const getCitiesList = () => {
    const output = [];
    Object.values(groupedData).forEach((arr) => {
      arr.forEach((x) => {
        if (x.state === region) {
          output.push(x.city);
        }
      });
    });
    return [...new Set(output.map((y) => y))];
  };

  const getCategoriesList = () => {
    const output = [];
    Object.values(groupedData).forEach((arr) => {
      arr.forEach((x) => {
        if (x.city === city && x.state === region) {
          output.push(x.category);
        }
      });
    });
    return [...new Set(output.map((y) => y))];
  };

  return (
    <div className="vstack gap-3">
      <Form className="d-flex col-12 flex-sm-wrap mx-lg-auto p-0 gap-3 search-vendors">
        {/* <Col className="col-xxl-3 col-sm-12 gap-2 shadow-lg rounded-1 p-4 mh-100">
          <Form.Group>
            <Form.Label
              className="fs-5 fw-semibold custom-pry-color mb-3"
              htmlFor="search-businesses"
            >
              <Globe /> Search all vendors
            </Form.Label>

            <Form.Control
              id="search-businesses"
              className="w-100 py-2 rounded-0  mt-2"
              placeholder="Eg: Car Tyres"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </Form.Group>

          <Col className="w-75 hstack mt-3">
            <Button
              size="sm"
              className="custom-pry custom-pry-border rounded-1"
              onClick={handleGeneralSearch}
              type="submit"
              disabled={search === ""}
            >
              <Search />
            </Button>
            <Button
              size="sm"
              className="border bg-transparent text-dark rounded-1 mx-2"
              onClick={handleResetGeneral}
            >
              <ArrowClockwise />
            </Button>
          </Col>
        </Col> */}
        <Col className="col-xxl-5 col-sm-12 gap-2 shadow-lg rounded-1 p-4">
          <h5 className="fw-semibold custom-pry-color mb-3">
            <Filter /> Search vendor
          </h5>
          <FormGroup className="mb-2">
            <Form.Label
              htmlFor="state-region"
              className="fw-semibold hstack gap-2"
            >
              <Map /> State/Region
            </Form.Label>
            <Form.Select
              id="state-region"
              className={`rounded-0 `}
              onChange={(e) => setRegion(e.target.value)}
              value={region}
              required
            >
              <option>Select</option>
              {regions?.map((element, index) => (
                <option key={index}>{element}</option>
              ))}
            </Form.Select>
          </FormGroup>
          <FormGroup className="mb-2">
            <Form.Label htmlFor="city" className="fw-semibold hstack gap-2">
              <Bank2 /> City
            </Form.Label>
            <Form.Select
              id="city"
              className={`rounded-0 `}
              onChange={(e) => setCity(e.target.value)}
              required
              value={city}
            >
              <option>Select</option>
              {getCitiesList()?.map((element, index) => (
                <option key={index}>{element}</option>
              ))}
            </Form.Select>
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="category" className="fw-semibold hstack gap-2">
              <CardChecklist /> Category
            </Form.Label>
            <Form.Select
              id="category"
              className={`rounded-0 `}
              onChange={(e) => setCategories(e.target.value)}
              value={category}
              required
            >
              <option>Select</option>
              {getCategoriesList()?.map((element, index) => (
                <option key={index}>{element}</option>
              ))}
            </Form.Select>
          </FormGroup>

          <Col className="hstack gap-2 mt-3">
            <Button
              size="sm"
              type="submit"
              className="custom-pry custom-pry-border rounded-1"
              onClick={handleNarrowSearch}
              disabled={city === "" || region === "" || category === ""}
            >
              <Search />
            </Button>
            <Button
              size="sm"
              className="border custom-pry custom-pry-border rounded-1 bg-transparent custom-pry-color"
              onClick={handleResetNarrow}
            >
              <ArrowClockwise />
            </Button>
          </Col>
        </Col>

        <Col className="col-xxl-6 col-sm-12 gap-2 shadow-lg rounded-1 p-4 mh-100 custom-pry d-flex justify-content-center align-items-center text-white">
          <div>
            <h2 className="fs-1 fw-bolder">
              Would you like to remember your search criteria?
            </h2>
            <p className="text-light mt-3">
              Don't worry! By saving search parameters, you could easily
              continue from where you stopped when next you visit
            </p>
            <div className="mt-5 justify-content-between d-flex">
              <Button
                onClick={() => {
                  const { region, city, category } = JSON.parse(
                    localStorage.getItem("last-search-parameters")
                  );

                  setRegion(region);
                  setCategories(category);
                  setCity(city);
                }}
                className="btn btn-outline custom-pry-text fw-bold border border-light btn-light py-3"
              >
                Retrieve search
              </Button>
              <Button
                onClick={() => {
                  const data = { region, category, city };
                  localStorage.setItem(
                    "last-search-parameters",
                    JSON.stringify(data)
                  );
                }}
                className="btn btn-outline custom-pry-text fw-bold border border-light btn-light py-3"
              >
                Save choice
              </Button>
            </div>
          </div>
        </Col>
      </Form>
    </div>
  );
};

export default FindCustomers;
