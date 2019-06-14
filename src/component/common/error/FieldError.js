import React from 'react'

const FieldError = ({ error }) => (
    <div className="error-wrapper" style={{ color: "red", fontSize: "12px" }}>{error}</div>
)

export default FieldError