import Nav from './Nav';

it('render correctly',()=>{
    const wrapper = shallow(
        <Nav/>
    );
    expect(wrapper).toMatchSnapshot();
});