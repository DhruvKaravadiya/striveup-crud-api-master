export default function ReadFaculty() {
  const navigate = useNavigate();
  const param = useParams();

  const apiUrl = "https://630c5aad83986f74a7be5bb1.mockapi.io/faculties";

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>FacultyName : {data.FacultyName} </h1>
      <h1>FacultySalary : {data.FacultySalary} </h1>
      <img src={data.FacultyImage} />
      <button
        onClick={() => {
          fetch(apiUrl + "/" + param.id, { method: "DELETE" }).then((res) => {
            navigate("/faculties");
          });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          navigate("../faculties/edit/" + param.id);
        }}
      >
        Edit
      </button>
    </>
  );
}
