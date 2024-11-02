import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { instance } from "@apis/instance";

export const useUserProfile = () => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<String | null>("세호");

  const fetchData = async () => {
    try {
      // TODO - team_id 저장, profile id 저장
      const response = await instance.get(
        "https://test.site/api/teams/{team_id}/profiles/{profile_id}"
      );
      setResponse(response);
    } catch (err) {
      setError("박세호");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { response, error };
};
