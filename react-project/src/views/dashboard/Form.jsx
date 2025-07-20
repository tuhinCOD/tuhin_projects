import { useEffect, useState } from "react"
import Input from "../../components/Input";
import Button from "../../components/Button";

function Form({updateData, existingData, editData}) {
    const [field, setField] = useState({id: "", email: "", mobile: ""});
    const [err, setErr] = useState({email: "", mobile: ""});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setField({...field, [name]: value});
    };

    useEffect(() => {
        if (editData?.id) {
            setField({
                id: editData.id || "",
                email: editData.email || "",
                mobile: editData.mobile || ""
            });
        };
    },[editData]);

    const resetForm = () => {
        setField({id: "", email: "", mobile: ""});
        setErr({email: "", mobile: ""});
    };

    const formSubmit = (event) => {
        event.preventDefault();
        let er = 0;
        const newErrors = {};
        if (email == "" || email == null || email == 0) {
            er++;
            newErrors.email = "email required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            newErrors.email = "invalid email format";
        } else {
            newErrors.email = "";
        }

        if (mobile == "" || mobile == null) {
            er++;
            newErrors.mobile = "mobile required";
        } else {
            newErrors.mobile = "";
        }
        setErr(newErrors);

        if (er === 0) {
            if (editData?.id && field.id) {
                const updated = existingData.map((item) =>
                    item.id === editData.id ? { ...field } : item
                );
                localStorage.setItem("dashdatas", JSON.stringify(updated));
            } else {
                const newId = Date.now();
                const newEntry = {...field, id: newId};
                localStorage.setItem("dashdatas", JSON.stringify([newEntry, ...existingData]));
            }
            updateData();
            resetForm();
        }
    };
  return (
    <>
        <form onSubmit={formSubmit}>
            <div className="mb-3">
                <div className="row g-1">
                    <Input type="hidden" name="id" onChange={handleInput} value={field.id}/>
                    <div className="col-6">
                        <Input 
                        type="text" 
                        label="Email" 
                        id="email" 
                        weight="sm" 
                        focus="true"
                        must="true"
                        onChange={handleInput} 
                        err={err.email} 
                        value={field.email} 
                        name="email"/>
                    </div>
                    <div className="col-6">
                        <Input 
                        type="text" 
                        label="Mobile" 
                        id="mobile" 
                        weight="sm" 
                        must="true" 
                        onChange={handleInput} 
                        err={err.mobile} 
                        value={field.mobile} 
                        name="mobile"/>
                    </div>
                </div>
            </div>                     
            <Button label={field.id ? "Update" : "Submit"} type="submit" btnclass="me-2"/>
            <Button label="Reset" type="button" onClick={resetForm}/>
        </form>
    </>
  )
}

export default Form