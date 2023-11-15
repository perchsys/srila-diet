import React, { useState } from "react";
import '../styles/hypertension.css'


const YourComponent = () => {

 
  // State variables for form data
  const [formData1, setFormData1] = useState({
    date: "",
    fbs: "",
    pp1: "",
   
  });

  const [formData2, setFormData2] = useState({
    imgpp1: null,
    imgpp2: null,
    imgpp3: null,
  });

  const [formData3, setFormData3] = useState({
    walking: "",
    yoga: "",
    gym: "",
  });

  // State variable for table data
  const [tableData, setTableData] = useState([
   
    // Add more data as needed
  ]);

  // Active tab state
  const [activeTab, setActiveTab] = useState("table1");

  // Handle form submissions for all tabs
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Combine form data from all tabs into a single object
    const combinedData = {
      ...formData1,
      ...formData2,
      ...formData3,
    };

    // Update tableData with the combined data
    const newTableData = [...tableData, combinedData];
    setTableData(newTableData);

    // Clear form data for all tabs
    setFormData1({
      date: "",
      fbs: "",
      pp1: "",
     
      
    });
    setFormData2({
      imgpp1: null,
      imgpp2: null,
      imgpp3: null,
    });
    setFormData3({
      walking: "",
      yoga: "",
      gym: "",
    });

    // Optionally, you can also clear the selected files state if needed
    setSelectedFiles({
      imgpp1: null,
      imgpp2: null,
      imgpp3: null,
    });

    // Optionally, you can switch to a default active tab or do any other necessary actions
    setActiveTab("table1"); // For example, switch to the first tab
  };

  const [selectedFiles, setSelectedFiles] = useState({
    imgpp1: null,
    imgpp2: null,
    imgpp3: null,
  });

  const handleFileChange = (event, fieldName) => {
    // Update the selected file in the state
    setSelectedFiles({
      ...selectedFiles,
      [fieldName]: event.target.files[0],
    });
  };
  const handleFormSubmit1 = (event) => {
    event.preventDefault();
    // Handle form 1 submission logic here
    const newTableData = [...tableData, formData1];
    setTableData(newTableData);
  };

  const handleFormSubmit2 = (event) => {
    event.preventDefault();

    // Create a new object that combines the form data and selected image files
    const newData = {
      ...formData2,
      imgpp1: breakfastImage ? breakfastImage.name : "None",
      imgpp2: lunchImage ? lunchImage.name : "None",
      imgpp3: dinnerImage ? dinnerImage.name : "None",
    };

    // Update the tableData state with the new data
    const newTableData = [...tableData, newData];
    setTableData(newTableData);

    // Clear the selected files
    setBreakfastImage(null);
    setLunchImage(null);
    setDinnerImage(null);

    // Move to the "Exercise" tab
    setActiveTab("table3");
  };
  const handleFormSubmit3 = (event) => {
    event.preventDefault();
    // Handle form 3 submission logic here
    const newTableData = [...tableData, formData3];
    setTableData(newTableData);
  };

  const [breakfastImage, setBreakfastImage] = useState(null);
  const [lunchImage, setLunchImage] = useState(null);
  const [dinnerImage, setDinnerImage] = useState(null);

  const handleBreakfastImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setBreakfastImage(e.target.files[0]);
    }
  };

  const handleLunchImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setLunchImage(e.target.files[0]);
    }
  };
  const handleDinnerImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setDinnerImage(e.target.files[0]);
    }
  };

  return (
    
    <div className="col">
      <div className="container">
     <h3 className="home"><a href="/">Home</a></h3>
       <h3 className="logout"><a href="/">Logout</a></h3>
      </div>
      <div className="about_taital_main">
        
        <div className="row" style={{ marginTop: "40px" }}>
         
       
          <div className="col-lg-8">
            <div className="button-container">
              <span className={`tab ${activeTab === 'table1' ? 'active' : ''}`} onClick={() => setActiveTab("table1")}>
                Weight
              </span>
              <span className={`tab ${activeTab === 'table2' ? 'active' : ''}`} onClick={() => setActiveTab("table2")}>
                Food
              </span>
              <span className={`tab ${activeTab === 'table3' ? 'active' : ''}`} onClick={() => setActiveTab("table3")}>
                Exercise
              </span>
            </div>
            {activeTab === "table1" && (
              <form
                action="diabetes.php" // Replace with your form action
                className="form"
                method="post"
                encType="multipart/form-data"
                onSubmit={handleFormSubmit1}
              >
                <div className="tab-content" style={{ border: "1px solid #CCCCCC", padding: "20px" }}>
                  <div className="table-content" id="table1">
                    <table id="myTable">
                      <tbody>
                        <tr>
                          <th>Date</th>
                          <th>
                            <input
                              type="date"
                              name="date"
                              value={formData1.date}
                              onChange={(e) => setFormData1({ ...formData1, date: e.target.value })}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th>Morning Weight/ Kg</th>
                          <th>
                            <input
                              type="text"
                              name="fbs"
                              value={formData1.fbs}
                              onChange={(e) => setFormData1({ ...formData1, fbs: e.target.value })}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th>Waist Circumference (cm)</th>
                          <th>
                            <input
                              type="text"
                              name="pp1"
                              value={formData1.pp1}
                              onChange={(e) => setFormData1({ ...formData1, pp1: e.target.value })}
                            />
                          </th>
                        </tr>
                      
                      
                      </tbody>
                    </table>
                    <br />
                  </div>
                </div>
                <input
                  type="button" // Change type to "button"
                  value="Next"
                  className="submit-btn"
                  onClick={() => setActiveTab("table2")}
                />
                
              </form>
            )}

            {activeTab === "table2" && (
             <form
             action="diabetes.php" // Replace with your form action
             className="form"
             method="post"
             encType="multipart/form-data"
             onSubmit={handleFormSubmit2}
           >
             <div className="tab-content" style={{ border: "1px solid #CCCCCC", padding: "20px" }}>
               <div className="table-content" id="table2">
                 <h1>File Upload</h1>
                 <input
                   type="file"
                   name="imgpp1"
                   onChange={(e) => {
                     handleFileChange(e, "imgpp1");
                     handleBreakfastImageChange(e);
                   }}
                 />
                 <p>Breakfast Image: {breakfastImage ? breakfastImage.name : "None"}</p>
                 {breakfastImage && (
                   <div>
                       <img src={URL.createObjectURL(breakfastImage)} alt="Breakfast" width="100" height="100" />
                   </div>
                 )}
                 <input
                   type="file"
                   name="imgpp2"
                   onChange={(e) => {
                     handleFileChange(e, "imgpp2");
                     handleLunchImageChange(e);
                   }}
                 />
                 <p>Lunch Image: {lunchImage ? lunchImage.name : "None"}</p>
                 {lunchImage && (
                   <div>
                      <img src={URL.createObjectURL(lunchImage)} alt="Lunch" width="100" height="100" />
                   </div>
                 )}
                 <p>Lunch Image: {formData2.imgpp2 ? formData2.imgpp2.name : "None"}</p>
                 <input
                   type="file"
                   name="imgpp3"
                   onChange={(e) => {
                     handleFileChange(e, "imgpp3");
                     handleDinnerImageChange(e);
                   }}
                 />

                 {dinnerImage && (
                   <div>
                     <img src={URL.createObjectURL(dinnerImage)} alt="Dinner" width="100" height="100" />
                   </div>
                 )}
                 <p>Dinner Image: {formData2.imgpp3 ? formData2.imgpp3.name : "None"}</p>
               </div>


             </div>
             <input
               type="button" // Change type to "button"
               value="Next"
               className="submit-btn"
               onClick={() => setActiveTab("table3")}
             />
           </form>
            )}


            {activeTab === "table3" && (
              <form
                action="diabetes.php" // Replace with your form action
                className="form"
                method="post"
                onSubmit={handleFormSubmit3}
              >
                <div className="tab-content" style={{ border: "1px solid #CCCCCC", padding: "20px" }}>
                  <div className="table-content" id="table3">
                    <table id="myTable">
                      <tbody>
                        <tr>
                          <th>Walking (minutes)</th>
                          <th>
                            <input
                              type="text"
                              name="walking"
                              onChange={(e) => setFormData3({ ...formData3, walking: e.target.value })}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th>Yoga (minutes)</th>
                          <th>
                            <input
                              type="text"
                              name="yoga"
                              onChange={(e) => setFormData3({ ...formData3, yoga: e.target.value })}
                            />
                          </th>
                        </tr>
                        <tr>
                          <th>Gym (minutes)</th>
                          <th>
                            <input
                              type="text"
                              name="gym"
                              onChange={(e) => setFormData3({ ...formData3, gym: e.target.value })}
                            />
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                  </div>
                </div>
                <input type="submit" className="submit-btn" onClick={handleFormSubmit} />
              </form>
            )}

            {/* Save button outside of the tabs */}


          </div>
        </div>

        <br />

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Morning Weight/ Kg</th>
              <th>Waist Circumference (cm)</th>
              
              <th>Breakfast Image</th>
              <th>Lunch Image</th>
              <th>Dinner Image</th>
              <th>Walking (minutes)</th>
              <th>Yoga (minutes)</th>
              <th>Gym (minutes)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.date}</td>
                <td>{data.fbs}</td>
                <td>{data.pp1}</td>
               
                <td>
                {breakfastImage && (
                      <div>
                          <img src={URL.createObjectURL(breakfastImage)} alt="Breakfast" width="50" height="50" />
                      </div>
                    )}
                </td>
                <td>
                {lunchImage && (
                      <div>
                         <img src={URL.createObjectURL(lunchImage)} alt="Lunch" width="50" height="50" />
                      </div>
                    )}
                </td>
                <td>
                {dinnerImage && (
                      <div>
                        <img src={URL.createObjectURL(dinnerImage)} alt="Dinner" width="50" height="50" />
                      </div>
                    )}
                </td>
                <td>{data.walking}</td>
                <td>{data.yoga}</td>
                <td>{data.gym}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YourComponent;
