import axios from "axios";
import React, { useState, useEffect } from "react";
import { GoKebabVertical } from "react-icons/go";

const MemberTable = () => {
  const [members, setMembers] = useState([]);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const [pageNum, setPageNum] = useState(1);
  const [previousCount, setPreviousCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);

  const itemsPerPage = 5; // Number of items to display per page

  const fetchMembers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/auth", {
        headers: {
          accessToken: accessToken,
        },
      });
      const members = response.data.data;
      console.log(members);
      setMembers(members);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [pageNum]);

  const handlePreviousClick = () => {
    if (pageNum > 1) {
      setPageNum((prevPageNum) => prevPageNum - 1);
    }
  };

  const handleNextClick = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  useEffect(() => {
    const updatePagination = () => {
      setIsPreviousDisabled(pageNum === 1);
      setIsNextDisabled(members.length <= itemsPerPage);
      setPreviousCount(pageNum);
    };

    updatePagination();
  }, [pageNum, members]);

  // Calculate the index of the first and last item to display
  const firstItemIndex = (pageNum - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;

  // Slice the members array based on the current page and items per page
  const displayedMembers = members.slice(firstItemIndex, lastItemIndex);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Member NO.
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            First Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>

          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {displayedMembers?.map((pkg) => (
          <tr key={pkg.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.member_no}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.firstName}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.lastName}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.email}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                <GoKebabVertical />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberTable;
