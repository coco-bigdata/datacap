const builtinFunctions = [
  'abs',
  'acos',
  'add_months',
  'aes_decrypt',
  'aes_encrypt',
  'and',
  'array',
  'array_contains',
  'ascii',
  'asin',
  'assert_true',
  'assert_true_oom',
  'atan',
  'avg',
  'base64',
  'between',
  'bin',
  'bloom_filter',
  'bround',
  'cardinality_violation',
  'case',
  'cbrt',
  'ceil',
  'ceiling',
  'char_length',
  'character_length',
  'chr',
  'coalesce',
  'collect_list',
  'collect_set',
  'compute_stats',
  'concat',
  'concat_ws',
  'context_ngrams',
  'conv',
  'corr',
  'cos',
  'count',
  'covar_pop',
  'covar_samp',
  'crc32',
  'create_union',
  'cume_dist',
  'current_authorizer',
  'current_database',
  'current_date',
  'current_groups',
  'current_timestamp',
  'current_user',
  'date_add',
  'date_format',
  'date_sub',
  'datediff',
  'day',
  'dayofmonth',
  'dayofweek',
  'decode',
  'degrees',
  'dense_rank',
  'div',
  'e',
  'elt',
  'encode',
  'enforce_constraint',
  'exp',
  'explode',
  'extract_union',
  'factorial',
  'field',
  'find_in_set',
  'first_value',
  'floor',
  'floor_day',
  'floor_hour',
  'floor_minute',
  'floor_month',
  'floor_quarter',
  'floor_second',
  'floor_week',
  'floor_year',
  'format_number',
  'from_unixtime',
  'from_utc_timestamp',
  'get_json_object',
  'get_splits',
  'greatest',
  'grouping',
  'hash',
  'hex',
  'histogram_numeric',
  'hour',
  'if',
  'in',
  'in_bloom_filter',
  'in_file',
  'index',
  'initcap',
  'inline',
  'instr',
  'internal_interval',
  'isfalse',
  'isnotfalse',
  'isnotnull',
  'isnottrue',
  'isnull',
  'istrue',
  'java_method',
  'json_tuple',
  'lag',
  'last_day',
  'last_value',
  'lcase',
  'lead',
  'least',
  'length',
  'levenshtein',
  'like',
  'likeall',
  'likeany',
  'ln',
  'locate',
  'log',
  'log10',
  'log2',
  'logged_in_user',
  'lower',
  'lpad',
  'ltrim',
  'map',
  'map_keys',
  'map_values',
  'mask',
  'mask_first_n',
  'mask_hash',
  'mask_last_n',
  'mask_show_first_n',
  'mask_show_last_n',
  'matchpath',
  'max',
  'md5',
  'min',
  'minute',
  'mod',
  'month',
  'months_between',
  'murmur_hash',
  'named_struct',
  'negative',
  'next_day',
  'ngrams',
  'noop',
  'noopstreaming',
  'noopwithmap',
  'noopwithmapstreaming',
  'not',
  'ntile',
  'nullif',
  'nvl',
  'octet_length',
  'or',
  'parse_url',
  'parse_url_tuple',
  'percent_rank',
  'percentile',
  'percentile_approx',
  'pi',
  'pmod',
  'posexplode',
  'positive',
  'pow',
  'power',
  'printf',
  'quarter',
  'radians',
  'rand',
  'rank',
  'reflect',
  'reflect2',
  'regexp',
  'regexp_extract',
  'regexp_replace',
  'regr_avgx',
  'regr_avgy',
  'regr_count',
  'regr_intercept',
  'regr_r2',
  'regr_slope',
  'regr_sxx',
  'regr_sxy',
  'regr_syy',
  'repeat',
  'replace',
  'replicate_rows',
  'restrict_information_schema',
  'reverse',
  'rlike',
  'round',
  'row_number',
  'rpad',
  'rtrim',
  'second',
  'sentences',
  'sha',
  'sha1',
  'sha2',
  'shiftleft',
  'shiftright',
  'shiftrightunsigned',
  'sign',
  'sin',
  'size',
  'sort_array',
  'sort_array_by',
  'soundex',
  'space',
  'split',
  'sq_count_check',
  'sqrt',
  'stack',
  'std',
  'stddev',
  'stddev_pop',
  'stddev_samp',
  'str_to_map',
  'struct',
  'substr',
  'substring',
  'substring_index',
  'sum',
  'tan',
  'to_date',
  'to_epoch_milli',
  'to_unix_timestamp',
  'to_utc_timestamp',
  'translate',
  'trim',
  'trunc',
  'ucase',
  'udftoboolean',
  'udftobyte',
  'udftodouble',
  'udftofloat',
  'udftointeger',
  'udftolong',
  'udftoshort',
  'udftostring',
  'unbase64',
  'unhex',
  'unix_timestamp',
  'upper',
  'uuid',
  'var_pop',
  'var_samp',
  'variance',
  'version',
  'weekofyear',
  'when',
  'width_bucket',
  'windowingtablefunction',
  'xpath',
  'xpath_boolean',
  'xpath_double',
  'xpath_float',
  'xpath_int',
  'xpath_long',
  'xpath_number',
  'xpath_short',
  'xpath_string',
  'year'
];

export default {
  builtinFunctions
}