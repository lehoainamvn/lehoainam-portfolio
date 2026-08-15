import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO" id="skills">
      <div className="what-box">
        <h2 className="title">
          T<span className="hat-h2">ECHNOLOGY</span>
          <div>
            S<span className="do-h2">KILLS</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* CARD 1: BACKEND */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>Java & Spring Boot</h4>
              <p>
                Building Java microservices, stateless JWT authentication, RESTful APIs, Spring Data JPA / Hibernate, and PostgreSQL database management.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">Spring Security</div>
                <div className="what-tags">REST API</div>
                <div className="what-tags">JWT</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 2: FRONTEND */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>Angular & React.js</h4>
              <p>
                Developing responsive single-page web applications with Angular 17+, React.js, HTML5, CSS3, and JavaScript.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Angular</div>
                <div className="what-tags">React.js</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">JavaScript</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 3: DATABASE */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DATABASE</h3>
              <h4>Relational & NoSQL Storage</h4>
              <p>
                Database design, entity normalization, query optimization, and management across SQL and NoSQL data stores.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">SQL Server</div>
                <div className="what-tags">MongoDB (basic)</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 4: TOOLS */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>TOOLS</h3>
              <h4>DevOps & Development Workflow</h4>
              <p>
                Version control, containerized deployment, API testing, and continuous engineering workflows.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Postman</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 5: TESTING */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 4)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>TESTING</h3>
              <h4>Automated QA & E2E Suites</h4>
              <p>
                Engineering automated Playwright End-to-End (E2E) testing frameworks structured with Page Object Model (POM).
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Playwright</div>
                <div className="what-tags">E2E Testing</div>
                <div className="what-tags">Page Object Model (POM)</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 6: SYSTEM DESIGN */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 5)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>SYSTEM DESIGN</h3>
              <h4>Distributed Architecture</h4>
              <p>
                Architecting distributed microservice systems, caching layers with Redis, and message queuing with RabbitMQ.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Microservices (basic)</div>
                <div className="what-tags">Redis (basic)</div>
                <div className="what-tags">RabbitMQ (basic)</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
