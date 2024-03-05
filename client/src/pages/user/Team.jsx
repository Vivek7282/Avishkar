import { useEffect, useState } from "react";
import { getAllParticipating, inviteTeam } from "../../services/teamService";

const Team = () => {
  const [email, setEmail] = useState("");
  const [fetchedData, setFetchedData] = useState();
  const handleSubmit = (teamId) => {
    const data = {
      teamId: teamId,
      email: email,
    };
    console.log(data);
    inviteTeam(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllParticipating();
        console.log("gotted from loki ", data);
        setFetchedData(data);
        console.log(typeof data.teams);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("FetchedData", fetchedData);

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        {fetchedData?.teams?.participating?.map((team, index) => {
          return (
            <>
              <div className="container px-5 py-24 mx-auto sm:w-[80vw]">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    {team?.name}
                  </h1>
                  <div className="flex justify-center gap-5">
                    <input
                      className="rounded-lg text-black p-3 w-[30vw] xs:w-[16vw] md:w-[40vw]"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="flex justify-center px-10 py-2 border-4 w-[3vw] border-solid text-black border-black bg-slate-500 rounded-xl hover:bg-sky-700 "
                      onClick={() => handleSubmit(team._id)}
                    >
                      add
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row  text-4xl justify-center">
                    {team?.acceptedMembers.map((member, index) => {
                      return (
                        <>
                          <div key={member._id} className="m-2">
                            <div className="h-full flex   items-center border-gray-800 border p-4 rounded-lg">
                              <img
                                alt="team"
                                className="w-[10vw] h-[17vh] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/80x80"
                              />
                              <div className="flex-grow text-wrap">
                                <p className="text-white title-font font-medium ">
                                  {member.username}
                                </p>
                                <p className="text-gray-600">{member.role}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Team;
