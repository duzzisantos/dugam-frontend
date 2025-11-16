import { Button, Col, Form, FormGroup } from "react-bootstrap";
import {
  ArrowClockwise,
  Bank2,
  CardChecklist,
  Filter,
  Globe,
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
        <Col className="col-xxl-4 col-sm-12 gap-2 shadow-sm rounded-1 p-4">
          <h5 className="fw-semibold custom-pry-color mb-3">
            <Filter /> Narrow business search
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
        <Col className="col-xxl-4 col-sm-12 gap-2 shadow-sm rounded-1 p-4 mh-100">
          <Form.Group>
            <Form.Label
              className="fs-5 fw-semibold custom-pry-color mb-3"
              htmlFor="search-businesses"
            >
              <Globe /> Wide business search
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
        </Col>
      </Form>
    </div>
  );
};

export default FindCustomers;
