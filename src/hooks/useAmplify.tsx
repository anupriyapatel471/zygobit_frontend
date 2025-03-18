import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

const useAmplifyConfig = () => {
  useEffect(() => {
    Amplify.configure(outputs);
  }, []);
};

export default useAmplifyConfig;
