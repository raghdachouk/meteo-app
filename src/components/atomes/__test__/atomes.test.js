import renderer from "react-test-renderer";

import Button from "../button";
import Input from "../input";

test("Button renders correctly", () => {
  const button = renderer.create(
    <Button
      disabled={false}
      type="submit"
      onClick={() => console.log("test snapshot clicked")}
    >
      Test
    </Button>
  );
  const tree = button.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Input renders correctly", () => {
  const input = renderer.create(
    <Input name="test" placeholder="test snapshot"></Input>
  );
  const tree = input.toJSON();
  expect(tree).toMatchSnapshot();
});
