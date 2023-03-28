source "https://rubygems.org"

gem "github-pages", "~> 228", group: :jekyll_plugins

# If you have any plugins, put them here!
#group :jekyll_plugins do
#end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 2.0.6"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?


# Vulnerability issues
gem "nokogiri", "~> 1.13.10"
gem "addressable", ">= 2.8.0"
gem "commonmarker", ">= 0.23.7"
gem "activesupport", "~> 7.0.4.3"

# Fix for when using Ruby 3 - webrick no longer installed w/ Ruby 3
gem "webrick", "~> 1.8"
