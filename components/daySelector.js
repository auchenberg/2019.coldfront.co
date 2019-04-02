import Link from "next/link";

const DayLink = ({ children, callback, val, href }) => {
  const handleClick = e => {
    e.preventDefault();
    callback(val);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default class extends React.Component {
  render() {
    return (
      <div className="programOverview">
        <div className="narrow days">
          <div className="day">
            <DayLink
              href="/program/"
              callback={this.props.onDayChanged}
              val="day1"
            >
              <a>
                <h2>Day 1</h2>
              </a>
            </DayLink>
            <p>
              <strong>November 26</strong> – Talks, amazing food, social dinner
              and party
            </p>
          </div>
          <div className="day">
            <DayLink
              href="/program/"
              callback={this.props.onDayChanged}
              val="day2"
            >
              <a>
                <h2>Day 2</h2>
              </a>
            </DayLink>
            <p>
              <strong>November 27</strong> – Talks, amazing food, and social
              dinner
            </p>
          </div>
          <div className="day">
            <Link href="/program/">
              <a>
                <h2>Day 3</h2>
              </a>
            </Link>
            <p>
              <strong>November 28</strong> – Community day with workshops and
              meetups
            </p>
          </div>
        </div>

        <style jsx>{`
          .days {
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;

            @media (max-width: 768px) {
              display: block;
              border-bottom: 1px solid #fff;
            }

            @media (min-width: 768px) {
              margin: 100px 0;
            }
          }

          .day {
            width: 30%;

            a,
            a:link,
            a:hover {
              color: #000;
              cursor: pointer;
            }

            h2 {
              font-size: 50px;
            }

            @media (min-width: 1200px) {
              width: 25%;
            }

            @media (max-width: 768px) {
              h2 {
                font-size: 38px;
              }
            }
          }

          .arrow {
            width: 40px;
          }
        `}</style>
      </div>
    );
  }
}
