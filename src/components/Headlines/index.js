import React from 'react';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Headline from './Headline';
import { InputContainer, Container, DetailsContainer, ButtonContainer, HeadlinesContainer, Button } from './styles'

class Headlines extends React.Component {

  constructor() {
    super()
    this.state = {
      fromIndex: 0,
      currentVisible: 10
    }
  }

  render() {
    let headlines = [...this.props.headlines]
    if(headlines.length > 0) {
      headlines = headlines.splice(this.state.fromIndex, 10)
    }
    return (
      <Container>
        <InputContainer>
          <input 
            type='text'
            placeholder="Please search for the headlines" 
            aria-label="headlines-input"
            onChange={this.onChange}/>
        </InputContainer>
        <HeadlinesContainer>
          {
            headlines.map((hl, index) => {
              return <Headline headline={hl} key={hl.publishedAt + index}/>
            })
          }

        </HeadlinesContainer>
        {this.props.headlines.length > 0 && 
          <DetailsContainer>
            <p>Showing {this.state.fromIndex}-{this.state.fromIndex + 10} out of {this.props.headlines.length}</p>
            <ButtonContainer>
              <Button onClick={this.previous} disabled={this.state.fromIndex === 0}>Previous</Button>
              <Button onClick={this.next} disabled={this.props.headlines.length - this.state.fromIndex <= 10}> Next </Button>
            </ButtonContainer>
          </DetailsContainer>
        }
      </Container>
    )
  }

  previous = () => {
    if(this.state.fromIndex !== 0)
      this.setState({
        fromIndex: this.state.fromIndex - 10
      })
  }

  next = () => {
    if(this.props.headlines.length - this.state.fromIndex > 10)
      this.setState({
        fromIndex: this.state.fromIndex + 10
      })
  }

  onChange = (e) => {
    const { value } = e.target
    this.props.getHeadlines(value)
  }
}

const mapStateToProps = (state) => {
  return {
    headlines: state.headlinesContainer.headlines
  }
}

const mapDispatchToProps = dispatch =>  bindActionCreators({
  getHeadlines: actions.getHeadlinesAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Headlines)