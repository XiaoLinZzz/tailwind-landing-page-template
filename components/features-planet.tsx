import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import GithubUserCard from "@/components/github_card";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Optimize Cleaning Operations with Smart Workforce Management
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <div className="relative">
                  <Image
                    className="rounded-full bg-gray-900"
                    src={PlanetImg}
                    width={400}
                    height={400}
                    alt="Workforce Optimization"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ margin: "-100px" }}
                  >
                    <GithubUserCard
                      githubId="xiaolinzzz"
                      role="Frontend Developer"
                      className="absolute left-[5%] top-[20%] transform"
                      link="https://www.xiaolinzzz.com"
                    />
                    <GithubUserCard
                      githubId="lz94117312"
                      role="Backend Developer"
                      className="absolute left-[70%] top-[45%] transform whitespace-nowrap"
                      link="https://github.com/lz94117312"
                    />
                    <GithubUserCard
                      githubId="Ziming-W"
                      role="DevOps Engineer"
                      className="absolute bottom-[25%] transform "
                      link="https://github.com/Ziming-W"
                    />
                    <GithubUserCard
                      githubId="Dylan-Mleczko"
                      role="Backend Developer"
                      className="absolute left-[60%] top-[10%] transform "
                      link="https://github.com/Dylan-Mleczko"
                    />
                    <GithubUserCard
                      githubId="SiyuanWang-0712"
                      role="Frontend Developer"
                      className="absolute left-[50%] bottom-[15%] transform "
                      link="https://github.com/SiyuanWang-0712"
                    />
                  </div>
                </div>
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Platform Decoration"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Automated Shift Scheduling</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Reduce manual work with AI-powered scheduling that auto-assigns
                cleaners to shifts based on availability and location.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9Z" />
                </svg>
                <span>Live Location Tracking</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Monitor real-time cleaner locations to ensure work is completed
                at designated sites with geofencing verification.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                </svg>
                <span>Performance Insights</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Get data-driven insights into staff productivity, attendance,
                and job completion to optimize cleaning operations.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M12 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-1 6H5a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2ZM5 10h4a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2Z" />
                </svg>
                <span>Task Completion Tracking</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Monitor cleaning tasks in real time and ensure every assigned
                duty is completed on schedule.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M3 3h10v2H3V3Zm0 4h10v2H3V7Zm0 4h7v2H3v-2Z" />
                </svg>
                <span>Automated Reporting</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Generate detailed reports on cleaner performance, attendance,
                and job history with a single click.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm3.5 7a.5.5 0 0 0 0-1H8V4.5a.5.5 0 0 0-1 0V8a.5.5 0 0 0 .5.5H11.5Z" />
                </svg>
                <span>Real-Time Alerts</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Get instant notifications for late check-ins, shift changes, and
                task updates to stay on top of operations.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
