// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderImage from '../home/render-image.js';

const test = QUnit.test;

test('should render a list item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = /*html*/`
    <li>
        <div class="info-container">
            <h2>Uniwhal</h2>
            <p class="horns">1 Horn</p>
        </div>

        <div class="image-container">
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title="A unicorn and a narwhal nuzzling their horns">
        </div>
    </li>
    `;
    //Act 
    // Call the function you're testing and set the result to a const
    const output = renderImage();

    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(expected, output);
});
