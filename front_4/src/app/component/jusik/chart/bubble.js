// <block:setup:1>
const data = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  };
  // </block:setup>
  
  // <block:config:0>
  const config = {
    type: 'bubble',
    data: data,
    options: {}
  };
  // </block:config>
  
  module.exports = {
    actions: [],
    config: config,
  };

  const Bubble = () => {
    return (
      <Container>
        <Line type="line" data={data} options={options} />
      </Container>
    );
  };
  
  export default Bubble;
  