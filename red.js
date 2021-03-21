describe("<FeatureCard /> testing", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FeatureCard />);
    });

    it("should render three <Grid /> elements", () => {
        expect(wrapper.find(Grid)).toHaveLength(3);
    });

    it("should render two <Typograpgy /> elements", () => {
        expect(wrapper.find(Typography)).toHaveLength(2);
    });
});
