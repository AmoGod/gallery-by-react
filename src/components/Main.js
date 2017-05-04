require('normalize.css/normalize.css');
require('styles/App.css');

let imageDatas = require('../data/images.json');

imageDatas = (
		function genImageURL(imageDatasArr){
			for (let i=0; i<imageDatasArr.length; i++){
				let singleImageData = imageDatasArr[i];
				singleImageData.imageURL = require('../images/' + singleImageData.fileName);

				imageDatasArr[i] = singleImageData;
			}

			return imageDatasArr;
		}
	)(imageDatas);

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">

      	</section>
      	<nav className="controller-nav">

      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
