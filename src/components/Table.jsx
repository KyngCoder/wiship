import React from 'react'
import {GoKebabVertical} from 'react-icons/go'

const Table = ({displayedPackages}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Member NO.
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Full Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Airway Bill No
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Delivery
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Cost
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {displayedPackages?.map((pkg) => (
          <tr key={pkg.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.member_no}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.fullName}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.airwayBillNo}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.description}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.deliveryStatus ? 'yes' : 'no'}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.status}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">${pkg.cost}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900"><GoKebabVertical /></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table