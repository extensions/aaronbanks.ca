import React, {useState} from 'react';
import {
  Link
} from "react-router-dom";

export default () => {
    return <div className="mainPage">
          <p id="IntroParagraph">
            This is my first paragraph <br />
            this is the next line of the paragraph <br />
            and so on..... <br />
          </p>

          <Link to="/canoe">
            <p>
            This paragraph talks about my canoeing<br />
              THis is more text<br />
            </p>
          </Link>

          <Link to="/mountains">
            <p id="MountainsBio">
          This paragraph talks about my mountain life and snowboarding<br />
            THis is more text<br />
            </p>
          </Link>

          <Link to="/roadtrips">
            <p>
          This paragraph talks about my roadtrips<br />
            THis is more text<br />
            </p>
          </Link>

          <Link to="/cooking">
            <p>
          This paragraph talks about my cooking experience<br />
            THis is more text<br />
            </p>
          </Link>

          <Link to="/pandemic">
            <p>
          This paragraph talks about my pandemic experience<br />
            THis is more text<br />
            </p>
          </Link>

          <Link to="/programming">
            <p>
          This paragraph talks about my programming<br />
            THis is more text<br />
            </p>
          </Link>
      </div>;
};
