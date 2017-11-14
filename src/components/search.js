import React from 'react';

const Search = props => 
  
	<div >
    <div className="searchDiv">
      <div>
        <h3 ><strong>Search</strong></h3>
      </div>
      <div>
        <form>
          <span>
            Topic: 
            <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic"/>
          </span> <br/>
          <span>
            Start Year: 
            <input onChange={props.handleStartYearChange} type="text" className="form-control" id="start-year" />
          </span> <br/>
          <span>
            End Year: 
            <input onChange={props.handleEndYearChange} type="text" className="form-control" id="end-year" />
          </span> <br/>
          <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
          <br/>
        </form>
      </div>
    </div>
    <br/> <br/>  
    <div className="resultDiv" >
      <div>
        <h3><strong>Results</strong></h3>
      </div>
      <div>
        {props.renderArticles()}
      </div>
    </div>
    <br/><br/>
  </div>;


export default Search;
