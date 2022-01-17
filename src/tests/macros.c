// #define ASSERT_EQ(expected, seen) \
// __EXPECT(expected, #expected, seen, #seen, ==, 1)

#define TH_LOG(fmt, ...) do { \
  if (TH_LOG_ENABLED) \
    __TH_LOG(fmt, ##__VA_ARGS__); \
} while (0)

#define __TH_LOG(fmt, ...) \
fprintf( \
  TH_LOG_STREAM, \
  "# %s:%d:%s:" fmt "\n", \
  __FILE__, \
  __LINE__, \
  _metadata->name, \
  ##__VA_ARGS__ \
)