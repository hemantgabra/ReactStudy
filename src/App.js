//import logo from "./logo.svg";
import "./App.css";
import StudentData from "./Components/StudentData";
import EmployeData from "./Components/EmployeData";
import Data from "./Components/Data";
import TableData from "./Components/TableData";


const StudentsRowData = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
  {
    albumId: 1,
    id: 11,
    title: "nihil at amet non hic quia qui",
    url: "https://via.placeholder.com/600/1ee8a4",
    thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    albumId: 1,
    id: 12,
    title:
      "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    url: "https://via.placeholder.com/600/66b7d2",
    thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
  },
  {
    albumId: 1,
    id: 13,
    title: "repudiandae iusto deleniti rerum",
    url: "https://via.placeholder.com/600/197d29",
    thumbnailUrl: "https://via.placeholder.com/150/197d29",
  },
  {
    albumId: 1,
    id: 14,
    title: "est necessitatibus architecto ut laborum",
    url: "https://via.placeholder.com/600/61a65",
    thumbnailUrl: "https://via.placeholder.com/150/61a65",
  },
  {
    albumId: 1,
    id: 15,
    title: "harum dicta similique quis dolore earum ex qui",
    url: "https://via.placeholder.com/600/f9cee5",
    thumbnailUrl: "https://via.placeholder.com/150/f9cee5",
  },
  {
    albumId: 1,
    id: 16,
    title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    url: "https://via.placeholder.com/600/fdf73e",
    thumbnailUrl: "https://via.placeholder.com/150/fdf73e",
  },
  {
    albumId: 1,
    id: 17,
    title: "natus doloribus necessitatibus ipsa",
    url: "https://via.placeholder.com/600/9c184f",
    thumbnailUrl: "https://via.placeholder.com/150/9c184f",
  },
  {
    albumId: 1,
    id: 18,
    title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    url: "https://via.placeholder.com/600/1fe46f",
    thumbnailUrl: "https://via.placeholder.com/150/1fe46f",
  },
  {
    albumId: 1,
    id: 19,
    title: "perferendis nesciunt eveniet et optio a",
    url: "https://via.placeholder.com/600/56acb2",
    thumbnailUrl: "https://via.placeholder.com/150/56acb2",
  },
  {
    albumId: 1,
    id: 20,
    title:
      "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    url: "https://via.placeholder.com/600/8985dc",
    thumbnailUrl: "https://via.placeholder.com/150/8985dc",
  },
  {
    albumId: 1,
    id: 21,
    title: "ad et natus qui",
    url: "https://via.placeholder.com/600/5e12c6",
    thumbnailUrl: "https://via.placeholder.com/150/5e12c6",
  },
  {
    albumId: 1,
    id: 22,
    title: "et ea illo et sit voluptas animi blanditiis porro",
    url: "https://via.placeholder.com/600/45601a",
    thumbnailUrl: "https://via.placeholder.com/150/45601a",
  },
  {
    albumId: 1,
    id: 23,
    title: "harum velit vero totam",
    url: "https://via.placeholder.com/600/e924e6",
    thumbnailUrl: "https://via.placeholder.com/150/e924e6",
  },
  {
    albumId: 1,
    id: 24,
    title: "beatae officiis ut aut",
    url: "https://via.placeholder.com/600/8f209a",
    thumbnailUrl: "https://via.placeholder.com/150/8f209a",
  },
  {
    albumId: 1,
    id: 25,
    title: "facere non quis fuga fugit vitae",
    url: "https://via.placeholder.com/600/5e3a73",
    thumbnailUrl: "https://via.placeholder.com/150/5e3a73",
  },
  {
    albumId: 1,
    id: 26,
    title: "asperiores nobis voluptate qui",
    url: "https://via.placeholder.com/600/474645",
    thumbnailUrl: "https://via.placeholder.com/150/474645",
  },
  {
    albumId: 1,
    id: 27,
    title: "sit asperiores est quos quis nisi veniam error",
    url: "https://via.placeholder.com/600/c984bf",
    thumbnailUrl: "https://via.placeholder.com/150/c984bf",
  },
  {
    albumId: 1,
    id: 28,
    title: "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
    url: "https://via.placeholder.com/600/392537",
    thumbnailUrl: "https://via.placeholder.com/150/392537",
  },
  {
    albumId: 1,
    id: 29,
    title: "aut ipsam quos ab placeat omnis",
    url: "https://via.placeholder.com/600/602b9e",
    thumbnailUrl: "https://via.placeholder.com/150/602b9e",
  },
  {
    albumId: 1,
    id: 30,
    title: "odio enim voluptatem quidem aut nihil illum",
    url: "https://via.placeholder.com/600/372c93",
    thumbnailUrl: "https://via.placeholder.com/150/372c93",
  },
  {
    albumId: 1,
    id: 31,
    title: "voluptate voluptates sequi",
    url: "https://via.placeholder.com/600/a7c272",
    thumbnailUrl: "https://via.placeholder.com/150/a7c272",
  },
  {
    albumId: 1,
    id: 32,
    title: "ad enim dignissimos voluptatem similique",
    url: "https://via.placeholder.com/600/c70a4d",
    thumbnailUrl: "https://via.placeholder.com/150/c70a4d",
  },
  {
    albumId: 1,
    id: 33,
    title: "culpa ipsam nobis qui fuga magni et mollitia",
    url: "https://via.placeholder.com/600/501fe1",
    thumbnailUrl: "https://via.placeholder.com/150/501fe1",
  },
  {
    albumId: 1,
    id: 34,
    title: "vitae est facere quia itaque adipisci perferendis id maiores",
    url: "https://via.placeholder.com/600/35185e",
    thumbnailUrl: "https://via.placeholder.com/150/35185e",
  },
  {
    albumId: 1,
    id: 35,
    title: "tenetur minus voluptatum et",
    url: "https://via.placeholder.com/600/c96cad",
    thumbnailUrl: "https://via.placeholder.com/150/c96cad",
  },
  {
    albumId: 1,
    id: 36,
    title: "expedita rerum eaque",
    url: "https://via.placeholder.com/600/4d564d",
    thumbnailUrl: "https://via.placeholder.com/150/4d564d",
  },
  {
    albumId: 1,
    id: 37,
    title: "totam voluptas iusto deserunt dolores",
    url: "https://via.placeholder.com/600/ea51da",
    thumbnailUrl: "https://via.placeholder.com/150/ea51da",
  },
  {
    albumId: 1,
    id: 38,
    title: "natus magnam iure rerum pariatur molestias dolore nisi",
    url: "https://via.placeholder.com/600/4f5b8d",
    thumbnailUrl: "https://via.placeholder.com/150/4f5b8d",
  },
  {
    albumId: 1,
    id: 39,
    title: "molestiae nam ullam et rerum doloribus",
    url: "https://via.placeholder.com/600/1e71a2",
    thumbnailUrl: "https://via.placeholder.com/150/1e71a2",
  },
  {
    albumId: 1,
    id: 40,
    title: "est quas voluptates dignissimos sint praesentium nisi recusandae",
    url: "https://via.placeholder.com/600/3a0b95",
    thumbnailUrl: "https://via.placeholder.com/150/3a0b95",
  },
];
const EmployeRowData = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
  {
    userId: 2,
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    userId: 2,
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
  {
    userId: 2,
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
  },
  {
    userId: 2,
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
  },
  {
    userId: 2,
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  },
  {
    userId: 2,
    id: 16,
    title:
      "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
  },
  {
    userId: 2,
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
  },
  {
    userId: 2,
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
  },
  {
    userId: 2,
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
  },
  {
    userId: 2,
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
  },
];
const JsonData = [

  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 1,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    "userId": 1,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    "userId": 1,
    "id": 13,
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    "userId": 1,
    "id": 14,
    "title": "voluptatem eligendi optio",
    "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    "userId": 1,
    "id": 15,
    "title": "eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },

]


function App() {
  return (
    <div className="App">
      <h1>This is initial Poject10</h1>
      <StudentData studentPropsdata={StudentsRowData} />

      <h1 className="text-2xl text-red-500 marker:mt-5 m-5">
        EmployeData is below
      </h1>
      <EmployeData EmployeeData={EmployeRowData} />

      <div>
        <h1>This is initial Poject10</h1>
        <StudentData studentPropsdata={StudentsRowData} />
      </div>

      <div>
        <h1 className="text-4xl text-center mt-5 bg-blue-500 p-6 text-white">THIS IS MY INITIAL PROJECT</h1>
        <Data Paradata={JsonData} />
      </div>

      <div>
        <h1 className="text-4xl text-center mt-5 bg-blue-500 p-6 text-white">TABLE FOR DATA</h1>
        <TableData Paradata={JsonData} />
      </div>

      


    </div>
  );
}

export default App;
