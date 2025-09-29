enum EUserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BANNED = "BANNED",
}

enum EUserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

enum ECourseStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

enum ECourseLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

export { EUserStatus, EUserRole, ECourseStatus, ECourseLevel };
