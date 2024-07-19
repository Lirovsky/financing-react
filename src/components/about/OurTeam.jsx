
export default function OurTeam() {
    
  const cards = [
    {
      id: 1,
      name: "James Griffin" ,
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/img/person1.jpg",
    },
    {
      id: 2,
      name: "Claire Smith" ,
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/img/person2.jpg",
    },
    {
      id: 3,
      name: "Jessica Wilson" ,
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/img/person3.jpg",
    },
    {
      id: 4,
      name: "William Anderson" ,
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/img/person4.jpg",
    },
    {
      id: 5,
      name: "Julie Harvey" ,
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/img/person5.jpg",
    },
    {
      id: 6,
      name: "Shana Clarkson" ,
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/img/person1.jpg",
    },

  ];

  return (
    <div className='bg-white py-20'>
      <div className="container px-10 mx-auto md:px-0">
        <div className="w-full text-center mx-auto mb-20 md:w-5/6 lg:w-3/6">
          <h3 className="font-bold text-blue-700 text-3xl mb-3">
            Our Team
          </h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className='gap-5 md:flex md:flex-wrap md:justify-center'>
          {cards.map((item) => {
            return(
              <div key={item.id} className="flex flex-col justify-center items-center text-center mb-5 bg-white rounded-lg md:w-[45%] lg:w-[30%] ">
                <div>
                  <img src={item.image} className='w-40 object-cover rounded-full'/>
                </div>
                 <div className="flex flex-col justify-between p-5">
                    <h1 className="font-medium text-xl py-4">
                      {item.name}
                    </h1>
                    <p className="text-gray-500 text-base pb-4">
                      {item.about}
                    </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}